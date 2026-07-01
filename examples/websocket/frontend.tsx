---
title: "Armor Gym - WebSocket Demo"
description: "Live WebSocket demo for Armor Gym"
---

import ActionCard from "@/components/ui/action-card"

<div class="flex flex-col gap-8">
  <h1>WebSocket Demo</h1>
  <p>This page demonstrates real-time communication using Astro Actions and WebSockets.</p>
  
  <ActionCard
    title="Ping Server"
    description="Send a message to the server and get an echo response"
    action="ping"
    input={[
      { name: "message", label: "Message", type: "text", placeholder: "Hello!" }
    ]}
    submitLabel="Send Ping"
  />
</div>
