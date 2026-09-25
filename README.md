# Project Sairen - Model Context Protocol (MCP) Server

[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-ca.omniapps%2Fsairen-blue.svg)](https://registry.modelcontextprotocol.io)
[![Smithery](https://img.shields.io/badge/Smithery-52%20Tools-purple.svg)](https://smithery.ai)
[![x402 Verified](https://img.shields.io/badge/x402-v2%20Verified-green.svg)](https://x402register.com)
[![Free Utilities](https://img.shields.io/badge/Free%20Tier-Zero%20Auth-brightgreen.svg)](#-free-developer-utilities-zero-auth)
[![Base L2](https://img.shields.io/badge/Network-Base%20Mainnet-0052FF.svg)](https://base.org)

> **High-performance, zero-UI computational infrastructure for autonomous AI agents and developers.**  
> Connect once via remote SSE to instantly equip your AI coding assistant (Cursor, Claude Desktop, VS Code, Windsurf) with 40+ deterministic tools—including **free multi-agent cleanup utilities** and **pay-per-call machine microservices**.

---

## ⚡ Free Developer Utilities (Zero Auth Required)

These foundational tools are **100% free and require zero authentication, API keys, or payment signatures**:

| Tool | MCP Identifier | Description | Cost |
|---|---|---|---|
| **JSON Repair & Recovery** | `json_repair` | Sub-3ms deterministic syntax recovery. Auto-closes unclosed brackets, unescapes characters, quotes unquoted keys, and normalizes single quotes to rescue malformed LLM outputs. | **Free ($0.00)** |
| **LLM Context Window Trimmer** | `context_trim` | Intelligent multi-agent conversation pruner and deduplicator. Trims bloated tool call histories while preserving system instructions. | **Free ($0.00)** |
| **Precision NTP Time & Epoch** | `time` | Stratum-2 external NTP atomic time oracle. Returns physical UTC timestamps, nanosecond Unix epochs, and round-trip delay telemetry to eliminate clock drift and prompt hallucinations. | **Free ($0.00)** |
| **What Is My IP & Discovery** | `what_is_my_ip` | Outbound public IP detector and request discovery beacon for agents running behind proxies or VPNs. | **Free ($0.00)** |

---

## 🚀 1-Click Client Installation

Sairen runs as a high-availability remote SSE server. There are **no packages to install, no Node/Python dependencies, and zero local overhead**.

### 1. Claude Desktop

Add this configuration to your Claude Desktop config file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "sairen": {
      "type": "sse",
      "url": "https://sairen.omniapps.ca/sse"
    }
  }
}
```

### 2. Cursor IDE

In Cursor, go to **Settings > Features > MCP**, or add this to `.cursor/mcp.json` in your workspace:

```json
{
  "mcpServers": {
    "sairen": {
      "type": "sse",
      "url": "https://sairen.omniapps.ca/sse"
    }
  }
}
```

### 3. VS Code / Windsurf

Add to your MCP configuration file (`mcp.json`):

```json
{
  "servers": {
    "sairen": {
      "type": "sse",
      "url": "https://sairen.omniapps.ca/sse"
    }
  }
}
```

---

## 🛠️ Complete Tool Catalog (Selected Highlights)

Beyond the free developer utilities, Sairen provides on-demand computational capabilities settled natively via the open **x402 HTTP Payment Protocol** on Base & Solana USDC:

### 🧹 Agent Cleanup & Data Hygiene
- **`json_repair`**: Rescues malformed or truncated JSON from LLMs with syntax auto-healing. *(Free)*
- **`context_trim`**: Prunes repetitive conversation history and redundant tool outputs to save tokens. *(Free)*
- **`data_filter`**: In-memory SQL engine executing deterministic queries on CSV/JSON datasets before passing to LLM context (~75%+ token reduction).
- **`code_patch`**: Fuzzy Levenshtein diff healer that auto-aligns code changes even if LLM hallucinated indentation or surrounding lines.
- **`doc_compress`**: Removes boilerplate, stopwords, and structural noise from technical documentation.

### 🛡️ Safety & Security Firewalls
- **`safety_firewall`**: Sub-5ms deterministic security shield scanning for prompt injections, SSRF addresses, and shell exploits.
- **`url_safety`**: Classifies target URLs for phishing, internal IP leakage, cloud metadata SSRF, and domain spoofing.
- **`canary_detector`**: Scans web content for invisible honeypots, canary tokens, and zero-width tracking pixels.
- **`challenge_risk`**: Triages bot challenges, Cloudflare turnstiles, and Captcha friction risk before scraping.

### 🌐 Network & Infrastructure Oracles
- **`time`**: Stratum-2 NTP precision atomic time and nanosecond Unix epoch. *(Free)*
- **`what_is_my_ip`**: Discovers public egress IP and client networking headers. *(Free)*
- **`dns_propagation_oracle`**: Multi-vantage global DNS propagation consensus across Anycast resolvers.
- **`whois_lookup`**: RDAP/WHOIS intelligence screener calculating domain age and registrar risk tier.
- **`dependency_health`**: Real-time liveness and latency grid for upstream LLM providers (OpenAI, Anthropic, DeepSeek, Groq).

### ⚡ Web3 & Economic Protocol
- **`risk_oracle`**: Evaluates smart contract bytecode, wallet velocity, and OFAC blacklists on Base.
- **`dex_oracle`**: Direct on-chain Uniswap v3 & Aerodrome pool ticks, spot prices, and liquidity depth.
- **`gas_oracle`**: Real-time EIP-1559 base fee percentiles and gas recommendations for Base L2.
- **`bridge_oracle`**: Compares cross-chain bridge fees and speeds across Across, Stargate, CCTP, and deBridge.

---

## 📖 Live Endpoints & Specifications

- **Public Web Node**: [https://sairen.omniapps.ca](https://sairen.omniapps.ca)
- **FastMCP SSE Transport**: `https://sairen.omniapps.ca/sse`
- **Agent Discovery Card**: `https://sairen.omniapps.ca/.well-known/agent.json`
- **OpenAPI 3.1 Schema**: `https://sairen.omniapps.ca/openapi.json`
- **AI Crawler Summary**: `https://sairen.omniapps.ca/llms.txt`

---

## 📄 License & Terms

Operating under the MIT License. All computational endpoints are machine-native, deterministic, and delivered over secure TLS with zero human UI dependencies.
