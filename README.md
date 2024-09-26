# Ceramic Self.ID Tutorial

## Table of Contents
- [Introduction](#introduction)
- [What is Ceramic?](#what-is-ceramic)
- [Why Decentralized Data Matters in Web3](#why-decentralized-data-matters-in-web3)
- [Ceramic Use Cases](#ceramic-use-cases)
  - [Decentralized Reputation](#decentralized-reputation)
  - [Social Graphs](#social-graphs)
  - [Multi-Wallet and Multi-Chain Identity](#multi-wallet-and-multi-chain-identity)
- [Ceramic's Architecture](#ceramics-architecture)
- [Getting Started with Self.ID](#getting-started-with-selfid)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installation](#installation)
- [Run the Application](#run-the-application)
- [Conclusion](#conclusion)

## Introduction

This guide provides an overview of how to build a decentralized user profile using the Ceramic Network and its Self.ID SDK. By following this tutorial, you will gain an understanding of the significance of decentralized data in Web3, and learn how to integrate Ceramic's data protocol into your own application.

## What is Ceramic?

Ceramic is a decentralized data network that enables the development of composable Web3 applications by decentralizing application databases. This allows for data to be shared across multiple applications, enabling automatic interoperability. Ceramic's approach to data is similar to how smart contracts provide composability for tokens and DeFi protocols.

## Why Decentralized Data Matters in Web3

Web3 has seen significant growth through DeFi, NFTs, and DAOs, but remains limited to financial applications. With the rise of decentralized social media, blogs, and reputation systems, there is a growing demand for more data-rich applications. Ceramic breaks down data silos (like those seen in Web2 platforms such as Twitter and Facebook), enabling interoperable applications and allowing user data to be transferred seamlessly between dApps.

## Ceramic Use Cases

### Decentralized Reputation

Ceramic enables the building of multi-chain reputation systems that link to a user's decentralized identity. Users can carry their reputation across dApps and blockchains, unlike centralized systems where reputation is tied to individual platforms.

### Social Graphs

With Ceramic, decentralized social media can offer interoperability, allowing users to carry their social connections across multiple dApps without being tied to a single platform.

### Multi-Wallet and Multi-Chain Identity

Ceramic allows users to maintain a decentralized identity (3ID) that can be controlled by multiple wallets across different chains, creating a unified identity that can be easily accessed regardless of the blockchain.

## Ceramic's Architecture

Ceramic uses decentralized identities called **3IDs**, allowing users to link multiple wallets to a single identity. Data in Ceramic is organized into **Streams**. Each stream has an owner and can be modified over time by applying commits. The Self.ID SDK provides high-level tools to interact with these identities and streams.

## Getting Started with Self.ID

To start building your application with Ceramic and Self.ID, you'll need to clone the repository and install the required dependencies.

### Cloning the Repository

Clone the project repository from GitHub:
```bash
git clone https://github.com/WilliamMassalino/Ceramic-Self.ID.git
```
### Navigate into the Project Folder

```bash
cd Ceramic-Self.ID
```
### Installation

Install the necessary packages by running:
```bash
npm install
```
This command will install all required dependencies and libraries needed for the project, including:

* `@self.id/react and @self.id/web` for interacting with Ceramic's Self.ID.
* `key-did-provider-ed25519` for managing decentralized identities.
* `ethers and web3modal` for wallet integration.
  
If additional dependencies are required for your specific setup, you will find them listed in the package.json file of the project.

## Run the Application

To start the Next.js application, use the following command:

```bash
npm run dev
```
This will run the application locally at http://localhost:3000. You can now interact with the application to connect to the Ceramic Network, authenticate with your Ethereum wallet, and manage your decentralized profile.

## Conclusion

This project gives a practical demonstration of how to use Ceramic and Self.ID to build decentralized user profiles. It provides a starting point for exploring how to leverage the power of Ceramic's decentralized data protocol to create interoperable and data-rich Web3 applications. For more details and advanced usage, refer to the official [Ceramic documentation](https://developers.ceramic.network/).






