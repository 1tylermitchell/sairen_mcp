# Project Sairen - Model Context Protocol (MCP) Node

[![Sairen MCP server – quality and maintenance score on Glama](https://glama.ai/mcp/servers/1tylermitchell/sairen_mcp/badges/card.svg)](https://glama.ai/mcp/servers/1tylermitchell/sairen_mcp)

[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-ca.omniapps%2Fsairen-0052FF.svg)](https://registry.modelcontextprotocol.io)
[![Version](https://img.shields.io/badge/Version-1.6.0-blue.svg)](https://github.com/1tylermitchell/sairen_mcp)
[![Tools](https://img.shields.io/badge/Tools-43%20Canonical%20Tools-purple.svg)](#-comprehensive-tool-catalog)
[![Domain Profiles](https://img.shields.io/badge/Domain%20Profiles-DeFi%20%7C%20Security%20%7C%20AgentOps%20%7C%20Resilience-teal.svg)](#-domain-scoped-sse-profiles-zero-context-bloat)
[![Free Tier](https://img.shields.io/badge/Free%20Tier-4%20Zero--Auth%20Utilities-brightgreen.svg)](#-free-developer-utilities-zero-auth)
[![x402 Micropayments](https://img.shields.io/badge/x402-Base%20%26%20Solana%20USDC-22c55e.svg)](#-economic-protocol--x402-micropayments)

> **High-performance, zero-UI computational infrastructure for autonomous AI agents, coding assistants, and multi-agent swarms.**  
> Connect over remote FastMCP SSE to equip **Claude Desktop, Cursor, VS Code, Windsurf, or custom LangChain/AutoGen agents** with 43 deterministic, machine-native capabilities—ranging from **100% free multi-agent cleanup utilities** to **pay-per-call microservices** settled via the x402 open standard.

---

## ⚡ Free Developer Utilities (Zero Auth Required)

These foundational utilities are **100% free with zero authentication, zero API keys, and zero payment signatures required**. They solve the most common multi-agent execution failure modes:

| Tool Identifier | FastMCP Tool | Description & Problem Solved | Latency | Cost |
|---|---|---|---|---|
| **`json_repair`** | `heal_json_schema` | **Syntax Recovery & Schema Healing**: Deterministic C-accelerated parser that auto-closes unclosed braces/brackets, fixes unquoted keys, strips trailing commas, normalizes single quotes, and rescues malformed LLM outputs. | `<3ms` | **Free ($0.00)** |
| **`context_trim`** | `trim_llm_context` | **LLM Context Pruner**: Intelligent multi-agent conversation pruner and deduplicator. Trims bloated tool call histories and repetitive messages while preserving critical system instructions. | `<5ms` | **Free ($0.00)** |
| **`time`** | `get_precision_time` | **Stratum-2 NTP Atomic Clock**: Returns physical UTC timestamps, nanosecond Unix epochs, ISO 8601 formatting, and 4-point round-trip delay telemetry. Eliminates clock drift and timestamp hallucinations. | `<20ms` | **Free ($0.00)** |
| **`what_is_my_ip`** | `get_egress_ip` | **Public Egress Discovery**: Detects caller's public outbound IP, TLS handshake ciphers, and routing headers for agents operating behind proxies or VPNs. | `<10ms` | **Free ($0.00)** |

---

## 🎯 Domain-Scoped SSE Profiles (Zero Context Bloat)

Loading 40+ tool definitions into a single model prompt can consume **over 12,000 prompt tokens** and induce tool selection confusion. Sairen solves this by providing **lean, domain-scoped SSE endpoints**. Connect only to the tools your agent actually needs:

```text
                                  ┌──────────────────────────────┐
                                  │   https://sairen.omniapps.ca │
                                  └──────────────┬───────────────┘
                                                 │
         ┌───────────────────┬───────────────────┼───────────────────┬───────────────────┐
         ▼                   ▼                   ▼                   ▼                   ▼
    [/sse/defi]       [/sse/security]     [/sse/agentops]    [/sse/resilience]        [/sse]
   (10 Tools, DeFi)  (8 Tools, Security) (12 Tools, Runtime) (7 Tools, Rel.)    (Global Stream)
```

| Profile URL | Domain Focus | Canonical Tools Included | Ideal For |
|---|---|---|---|
| **`https://sairen.omniapps.ca/sse/defi`** | Autonomous Finance & Settlement | `get_dex_price`, `get_base_gas_oracle`, `simulate_transaction_oracle`, `bridge_oracle`, `create_task_bounty_escrow`, `list_task_bounties`, `cancel_task_bounty`, `create_rfp_auction`, `list_active_rfps`, `agent_invoice` | Trading bots, treasury managers, bounty escrows, arbitrage swarms |
| **`https://sairen.omniapps.ca/sse/security`** | Safety, Risk & Verification | `inspect_address`, `scan_payload_safety`, `scan_canary_tokens`, `classify_url`, `verify_cryptographic_proof`, `verify_fact_grounding`, `challenge_risk`, `arbitrate_consensus` | Security auditors, prompt injection shields, compliance bots, fact verification |
| **`https://sairen.omniapps.ca/sse/agentops`** | Agent Runtime & Tooling | `get_egress_ip`, `get_precision_time`, `extract_web_markdown`, `heal_json_schema`, `trim_llm_context`, `compress_document`, `apply_fuzzy_patch`, `lsh_dedup`, `code_sandbox`, `query_dns_records`, `query_whois`, `search_web` | Coding assistants (Cursor, Claude), scrapers, patch healers, execution runners |
| **`https://sairen.omniapps.ca/sse/resilience`** | Distributed Reliability & State | `manage_idempotency_key`, `throttle_check`, `circuit_breaker_guard`, `check_service_health`, `manage_dead_letter`, `create_webhook_listener`, `cron_trigger_oracle`, `scratchpad_set` | Multi-agent orchestrators, queue workers, fault-tolerant pipelines |
| **`https://sairen.omniapps.ca/sse`** | Global Discovery Stream | All 43 services + `search_tools` and `describe_tools` progressive discovery tools | General-purpose clients, registry inspectors, catalog indexers |

---

## 🔍 Progressive Tool Discovery (`search_tools` & `describe_tools`)

When connected to the global SSE endpoint, autonomous agents can discover tools on demand without loading all schemas up-front:

```json
// Example: Agent discovers tools for checking crypto prices
search_tools({
  "query": "dex spot price",
  "domain": "defi"
})
```
**Returns:**
```json
{
  "matches": [
    {
      "name": "get_dex_price",
      "description": "Live spot price oracle across Base EVM and Solana DEXs (Uniswap v3, Aerodrome, Raydium, Orca)",
      "price_usdc": "$0.0010",
      "domain": "defi",
      "recommended_profile_url": "https://sairen.omniapps.ca/sse/defi"
    }
  ]
}
```

Then retrieve the exact schema using `describe_tools(["get_dex_price"])`.

---

## 🚀 1-Click Client Configuration

Sairen operates as a high-availability remote SSE server. **No packages to compile, zero Python/Node environment issues, and zero host memory footprint.**

### 1. Claude Desktop

Add this configuration to your Claude Desktop config file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "sairen-agentops": {
      "type": "sse",
      "url": "https://sairen.omniapps.ca/sse/agentops"
    },
    "sairen-security": {
      "type": "sse",
      "url": "https://sairen.omniapps.ca/sse/security"
    }
  }
}
```
*(Or point to `https://sairen.omniapps.ca/sse` for the global catalog).*

### 2. Cursor IDE

In Cursor, navigate to **Settings > Features > MCP**, or add this to `.cursor/mcp.json` in your workspace:

```json
{
  "mcpServers": {
    "sairen": {
      "type": "sse",
      "url": "https://sairen.omniapps.ca/sse/agentops"
    }
  }
}
```

### 3. VS Code / Windsurf / Cline

Add to your workspace `mcp.json`:

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

### 4. NPX CLI Remote Bridge

Run directly using `npx` from any terminal:

```bash
# Connect to global catalog:
npx sairen-mcp

# Connect to a domain-scoped profile (recommended for small context windows):
npx sairen-mcp security
npx sairen-mcp defi
npx sairen-mcp agentops
npx sairen-mcp resilience
```

### 5. Docker Container

```bash
# Run isolated container bridge with security profile:
docker run -d --name sairen-mcp \
  -e SSE_URL=https://sairen.omniapps.ca/sse/security \
  ghcr.io/1tylermitchell/sairen_mcp:latest
```

---

## 🛠️ Comprehensive Tool Catalog

Below is the complete inventory of all 43 microservices active on Project Sairen, organized across the 13 canonical categories:

### 1. ⏱️ Sync & Time
- **`time` (`get_precision_time`)** — `[Free / Zero Auth]`  
  Stratum-2 NTP atomic time with nanosecond Unix epochs, ISO 8601 formatting, and 4-point round-trip telemetry. Eliminates clock drift and LLM timestamp hallucinations.

### 2. 📄 Extractor & Parsing
- **`extractor` (`extract_web_markdown`)** — `[$0.0050 USDC]`  
  High-density web scraper stripping HTML/CSS/JS bloat into clean, LLM-ready token-compressed Markdown. Zero headless browser overhead.
- **`temporal_parser` (`parse_temporal_expression`)** — `[$0.0005 USDC]`  
  Parses natural language relative dates (*"next Tuesday at 4pm EST"*, *"end of Q3"*) into deterministic UTC timestamps and cron schedules.
- **`doc_compress` (`compress_document`)** — `[$0.0005 USDC]`  
  Lossless text compression pipeline that strips boilerplate, redundant whitespace, and noise words, cutting prompt token consumption by 30-50%.

### 3. 🛡️ Safety & Firewalls
- **`json_repair` (`heal_json_schema`)** — `[Free / Zero Auth]`  
  Deterministic sub-3ms syntax recovery for truncated or malformed JSON outputs. Rescues unquoted keys, single quotes, and missing brackets.
- **`safety_firewall` (`scan_payload_safety`)** — `[$0.0010 USDC]`  
  Sub-5ms firewall inspecting agent inputs and outputs for prompt injections, SSRF addresses, shell injection sequences, and sensitive credentials.
- **`canary_detector` (`scan_canary_tokens`)** — `[$0.0020 USDC]`  
  Detects tracking pixels, zero-width steganography, DNS canaries, and invisible honeypots in untrusted external web content.
- **`url_safety_classifier` (`classify_url`)** — `[$0.0005 USDC]`  
  Classifies target URLs for phishing, internal IP leakage, cloud metadata SSRF endpoints (169.254.169.254), and domain spoofing.
- **`schema_coercer` (`coerce_schema_arguments`)** — `[$0.0002 USDC]`  
  Strict Pydantic/JSON-Schema validator and type coercer that normalizes agent tool arguments before dangerous function execution.

### 4. 🔐 Security & Cryptographic Proofs
- **`proof_verifier` (`verify_cryptographic_proof`)** — `[$0.0002 USDC]`  
  Verifies ECDSA (secp256k1), Ed25519, and Merkle tree inclusion proofs with zero custodial exposure.
- **`consensus_arbiter` (`arbitrate_consensus`)** — `[$0.0010 USDC]`  
  Multi-agent consensus engine that aggregates outputs from multiple LLM evaluators and resolves majority verdicts or outlier rejections.
- **`challenge_risk` (`score_challenge_risk`)** — `[$0.0005 USDC]`  
  Assesses bot challenge friction, Cloudflare Turnstile, and Captcha presence on target endpoints before initiating scrape jobs.
- **`fact_grounding` (`verify_fact_grounding`)** — `[$0.0005 USDC]`  
  Cross-checks model assertions against verifiable factual anchors and calculates hallucination confidence metrics.

### 5. 🌐 Oracles & Market Data
- **`dex_oracle` (`get_dex_price`)** — `[$0.0010 USDC]`  
  Direct on-chain spot price quoter across Uniswap v3 & Aerodrome on Base, with multi-RPC failover.
- **`solana_dex` (`get_solana_dex_price`)** — `[$0.0010 USDC]`  
  Real-time Solana DEX price oracle fetching Raydium and Orca pool reserves and token prices.
- **`wallet_risk` (`screen_wallet_risk`)** — `[$0.0020 USDC]`  
  Sub-1ms OFAC sanctions, Tornado Cash mixer, and wallet risk screening for EVM addresses using in-memory trie indexes.
- **`address_inspector` (`inspect_address`)** — `[$0.0010 USDC]`  
  Multi-chain balance, bytecode, and ledger inspector across Base, Ethereum, Solana, and Polygon.
- **`dns_oracle` (`query_dns_records`)** — `[$0.0005 USDC]`  
  Multi-vantage global DNS propagation consensus and DNSSEC validation across Anycast resolvers.
- **`whois_lookup` (`query_whois`)** — `[$0.0005 USDC]`  
  RDAP/WHOIS registrar intelligence screener calculating domain age, registration state, and risk tier.
- **`dependency_health` (`check_dependency_health`)** — `[$0.0003 USDC]`  
  Real-time liveness, response latency, and incident grid for upstream AI APIs (OpenAI, Anthropic, DeepSeek, Groq).
- **`search_oracle` (`search_web`)** — `[$0.0020 USDC]`  
  Autonomous search oracle returning high-signal grounded URLs with zero tracking or human ad bloat.

### 6. ⛽ DEX & Gas Optimization
- **`gas_oracle` (`get_base_gas_oracle`)** — `[$0.0001 USDC]`  
  EIP-1559 base fee, priority fee, and L1 data gas oracle on Base L2.
- **`simulated_tx` (`simulate_transaction_oracle`)** — `[$0.0005 USDC]`  
  Pre-flight EVM transaction simulator that estimates gas and decodes contract reverts before broadcasting.
- **`bridge_oracle` (`compare_bridge_routes`)** — `[$0.0010 USDC]`  
  Compares cross-chain bridge fees, slippage, and speeds across Across, Stargate, CCTP, and deBridge.

### 7. 🤝 Autonomous Commerce
- **`task_escrow` (`create_task_bounty_escrow`)** — `[$0.0100 USDC]`  
  Programmatic milestone escrow for multi-agent autonomous gig contracts, release conditions, and dispute arbitration.
- **`rfp_market` (`create_rfp_auction`)** — `[$0.0050 USDC]`  
  Broadcasts reverse auction Requests for Proposal (RFPs) for agent swarms to bid on compute and data tasks.
- **`agent_invoice` (`generate_agent_invoice`)** — `[$0.0010 USDC]`  
  ERC-681 / Solana Pay compatible machine-to-machine invoicing and payment receipt oracle.

### 8. ⏳ Async & Scheduling
- **`webhook_buffer` (`create_webhook_listener`)** — `[$0.0010 USDC]`  
  Provisions ephemeral public webhook URLs and in-memory ring buffers for asynchronous callback collection.
- **`cron_trigger` (`schedule_cron_trigger`)** — `[$0.0005 USDC]`  
  Autonomous delayed webhook execution and recurring cron trigger scheduler.

### 9. 🧠 Distributed State
- **`scratchpad` (`manage_scratchpad`)** — `[$0.0001 USDC]`  
  High-speed ephemeral key-value store for sharing state, intermediate findings, and flags across multi-agent swarms.
- **`idempotency_vault` (`manage_idempotency_key`)** — `[$0.0002 USDC]`  
  Atomic idempotency lock and response cache that prevents duplicate order submissions and double-spending.

### 10. 🛡️ Resilience & Reliability
- **`circuit_breaker` (`circuit_breaker_guard`)** — `[$0.0001 USDC]`  
  Adaptive circuit breaker that detects failing upstream microservices and protects agent workflows from cascading timeouts.
- **`throttle_guard` (`throttle_check`)** — `[$0.0001 USDC]`  
  Distributed token-bucket rate limiter ensuring agent swarms do not exhaust downstream API quotas.
- **`dead_letter_queue` (`manage_dead_letter`)** — `[$0.0010 USDC]`  
  Dead-letter queue for capturing, inspecting, leasing, and retrying failed tool executions.

### 11. 💻 Code & Compute
- **`code_sandbox` (`execute_code_sandbox`)** — `[$0.0020 USDC]`  
  Safe, isolated evaluator executing arithmetic, algorithmic logic, and deterministic transformations.
- **`diff_patcher` (`apply_fuzzy_patch`)** — `[$0.0005 USDC]`  
  Fuzzy Levenshtein diff healer that applies code edits even when the LLM hallucinated slight line number or whitespace drift.
- **`table_filter` (`filter_tabular_data`)** — `[$0.0010 USDC]`  
  In-memory SQL query engine running relational filters over CSV/JSON tabular data before ingestion (~75%+ token reduction).
- **`lsh_dedup` (`calculate_lsh_dedup`)** — `[$0.0003 USDC]`  
  MinHash / Locality-Sensitive Hashing (LSH) near-duplicate document and web content detector.
- **`random_choice` (`sample_random_choice`)** — `[$0.0001 USDC]`  
  Cryptographically secure random sampling, weighted distribution, and UUIDv4 generation oracle.

### 12. 📡 Infrastructure Telemetry
- **`telemetry` (`query_telemetry`)** — `[Free / Zero Auth]`  
  Real-time node latency, uptime, error rates, and capacity metrics.
- **`recover` (`recover_service_failure`)** — `[Free / Zero Auth]`  
  Autonomous diagnostic and fallback suggestion engine for failed API calls.
- **`what_is_my_ip` (`get_egress_ip`)** — `[Free / Zero Auth]`  
  Public outbound IP and network route detector.

---

## 💳 Economic Protocol & x402 Micropayments

Project Sairen implements the open **x402 HTTP Payment Required** standard. This eliminates API keys, subscriptions, credit cards, and KYC friction:

```text
1. Client sends tool request
2. Node returns HTTP 402 with EIP-712 / Solana challenge
3. Agent signs payment ($0.0001 - $0.0100 USDC on Base L2 or Solana)
4. Client attaches X-Payment-Signature: <tx_hash>
5. Node settles instantly and executes payload
```

### Supported Settlement Rails
- **Base (Ethereum L2)**: USDC Contract `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`
- **Solana Mainnet**: USDC Mint `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`

### Developer Integration & Mock Mode
For local development, integration tests, or CI/CD pipelines, attach a test signature header to execute any microservice without live wallet funds:
```http
X-Payment-Signature: mock_tx_hash
```

---

## 🌐 Live Architecture & Open Discovery Specifications

Project Sairen is intentionally machine-discoverable. Agents and scrapers can inspect live contracts and telemetry directly:

- **Public Production Node**: [https://sairen.omniapps.ca](https://sairen.omniapps.ca)
- **FastMCP SSE Remote URL**: `https://sairen.omniapps.ca/sse`
- **Agent Discovery Beacon**: `https://sairen.omniapps.ca/.well-known/agent.json`
- **OpenAPI 3.1 Schema**: `https://sairen.omniapps.ca/openapi.json`
- **LLM Context Summary**: `https://sairen.omniapps.ca/llms.txt`
- **Node Status & Uptime**: `https://sairen.omniapps.ca/v1/status`
- **GitHub Repository**: [https://github.com/1tylermitchell/sairen_mcp](https://github.com/1tylermitchell/sairen_mcp)

---

## 📄 License & Operating Principles

Released under the **MIT License**.  
All endpoints operate under a zero-UI, machine-to-machine SLA: sub-50ms execution latency, deterministic JSON contracts, and autonomous x402 settlement.
