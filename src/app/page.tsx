'use client';

import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "./client";
import { defineChain, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getTotalClaimedSupply, nextTokenIdToMint, getActiveClaimCondition } from "thirdweb/extensions/erc721";
import { useState } from "react";

export default function Home() {
  const account = useActiveAccount();

  // Replace the chain with the chain you want to connect to
  const chain = defineChain(sepolia);

  const [quantity, setQuantity] = useState<number>(1);

  // Replace the address with the address of the deployed contract
  const contract = getContract({
    client: client,
    chain: chain,
    address: "0xBb1d78c8799b33c5791ED6e49B84429c7106759E"
  });

  useReadContract(getTotalClaimedSupply, { contract: contract });
  useReadContract(nextTokenIdToMint, { contract: contract });
  useReadContract(getActiveClaimCondition, { contract: contract });

  return (
    <main className="p-4 pb-10 min-h-[100vh]  items-center absolute top-0 left-0 container max-w-screen-lg mx-auto">
      <ConnectButton
        client={client}
        chain={chain}
        
      />
      <div className="py-20 text-center">
        <div className="flex flex-col items-center mt-4">
          {/* Content has been removed as requested */}
        </div>
      </div>
    </main>
  );
}
