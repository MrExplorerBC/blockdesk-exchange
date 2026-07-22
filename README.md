# BlockDesk Exchange

Security-conscious, testnet-first high-value crypto exchange order workflow. The UI accepts requests of at least USD 10,000 but **does not expose mainnet deposit instructions or execute payouts** until custody and compliance integrations are configured.

## Local setup

1. Copy `.env.example` to `.env` and configure PostgreSQL.
2. Generate an Argon2id password hash offline: `node -e "require('argon2').hash(process.argv[1]).then(console.log)" "your-long-password"`
3. Set `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, and a random 32+ byte `AUTH_SECRET`.
4. Run `npm install`, `npm run db:push`, and `npm run dev`.

## Mainnet safety gate

The supplied BTC, Ethereum, Solana, BNB Smart Chain, and Polygon collection addresses are kept in server-side asset configuration, but are not sent to unauthenticated clients or returned from order APIs. Before enabling deposits, prove wallet control, replace static pricing with signed multi-provider quotes, integrate KYC/AML and wallet screening, use unique custody-managed deposit addresses, build chain-specific confirmation workers, commission an independent security audit, and obtain jurisdiction-specific legal approval.

Never commit private keys, seed phrases, `.env` files, or custody credentials.
