// "use client" directive enables client-side rendering in Next.js
"use client";

// Importing necessary modules and hooks
import { Web3Provider } from "@ethersproject/providers";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { useViewerConnection } from "@self.id/react";
import { EthereumAuthProvider } from "@self.id/web";
import { useViewerRecord } from "@self.id/react";

// Main functional component that represents the home page
export default function Home() {
  // Using useRef to keep a mutable object to access the Web3Modal instance
  const web3ModalRef = useRef();

  // Function to initialize the provider using Web3Modal
  const getProvider = async () => {
    // Connect to a wallet using Web3Modal
    const provider = await web3ModalRef.current.connect();
    // Wrap the raw provider with Web3Provider from ethers.js for easier use
    const wrappedProvider = new Web3Provider(provider);
    return wrappedProvider;
  };

  // Destructuring to get connection state and connect/disconnect functions
  const [connection, connect, disconnect] = useViewerConnection();

  // Effect to initialize Web3Modal if the user is not already connected
  useEffect(() => {
    if (connection.status !== "connected") {
      // Create a new Web3Modal instance with configuration options
      web3ModalRef.current = new Web3Modal({
        network: "goerli", // Target network
        providerOptions: {}, // No custom provider options for now
        disableInjectedProvider: false, // Use injected provider if available
      });
    }
  }, [connection.status]); // Re-run effect if the connection status changes

  // Function to handle connecting to Self.ID using an EthereumAuthProvider
  const connectToSelfID = async () => {
    const ethereumAuthProvider = await getEthereumAuthProvider();
    connect(ethereumAuthProvider); // Connect to the provider
  };

  // Function to create an EthereumAuthProvider instance
  const getEthereumAuthProvider = async () => {
    const wrappedProvider = await getProvider();
    const signer = wrappedProvider.getSigner(); // Get the signer from the provider
    const address = await signer.getAddress(); // Get the user's address
    // Return a new EthereumAuthProvider using the provider and address
    return new EthereumAuthProvider(wrappedProvider.provider, address);
  };

  // Rendering the main structure of the page
  return (
    <div className="main">
      {/* Navigation bar with connection status */}
      <div className="navbar">
        <span className="title">Ceramic Demo</span>
        {connection.status === "connected" ? (
          // Display connection status if connected
          <span className="subtitle">Connected</span>
        ) : (
          // Otherwise, show a "Connect" button
          <button
            onClick={connectToSelfID}
            className="button"
            disabled={connection.status === "connecting"} // Disable button if connecting
          >
            Connect
          </button>
        )}
      </div>

      {/* Main content area */}
      <div className="content">
        <div className="connection">
          {connection.status === "connected" ? (
            <div>
              {/* Display 3ID information when connected */}
              <span className="subtitle">
                Your 3ID is {connection.selfID.id}
              </span>
              {/* Component to set a record in Ceramic */}
              <RecordSetter />
            </div>
          ) : (
            // Prompt to connect the wallet if not connected
            <span className="subtitle">
              Connect with your wallet to access your 3ID
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// Component to interact with a viewer record in Ceramic
function RecordSetter() {
  // Using useViewerRecord hook to get a record for "basicProfile"
  const record = useViewerRecord("basicProfile");

  // Function to update the name field in the user's Ceramic profile
  const updateRecordName = async (name) => {
    await record.merge({
      name: name, // Merging the new name into the existing profile
    });
  };

  // Local state to store the name input
  const [name, setName] = useState("");

  // Rendering the UI for updating the profile record
  return (
    <div className="content">
      <div className="mt2">
        {record.content ? (
          // Display existing profile content if available
          <div className="flexCol">
            <span className="subtitle">Hello {record.content.name}!</span>
            <span>
              The above name was loaded from Ceramic Network. Try updating it
              below.
            </span>
          </div>
        ) : (
          // Prompt to create a profile if none exists
          <span>
            You do not have a profile record attached to your 3ID. Create a basic
            profile by setting a name below.
          </span>
        )}
      </div>

      {/* Input field for name */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state on input change
        className="mt2"
      />
      {/* Button to trigger updating the record */}
      <button className="button" onClick={() => updateRecordName(name)}>
        Update
      </button>
    </div>
  );
}
