# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

This project is an open-source SKILL.md file for SEO auditing. It does not process, store, or transmit user data. However, if you discover a security concern:

1. Open an issue at https://github.com/f9xr/seo-audit-report-skill/issues
2. Include a clear description and reproduction steps
3. Do not disclose the vulnerability publicly until it has been addressed

## Security Best Practices

- Always review third-party prompts before executing them
- The SKILL.md file only reads files in your workspace - it does not make network requests or execute system commands
- External links in generated reports point to official documentation (Google, Schema.org, web.dev)
- All external links use `rel="noopener noreferrer"` for tab-napping prevention
