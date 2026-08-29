# Changelog — SKILL.md

All notable changes to `SKILL.md` are documented in this file.

## [v5.1] - 2026-08-26

### Added
- Pillar Index table: 24 pillars organized by domain with skip-if conditions for quick reference
- Pillar mapping annotations on all 22 prompt templates
- Report length management rule (cap report at 3,000 lines; move per-file breakdowns to an appendix; Priority Fix Matrix capped at 20 items)

### Fixed
- `rel="next"/"prev"` deprecation note added to Pagination Handling (Google deprecated March 2019; Bing still respects it; primary strategy is view-all + self-referencing canonical)
- CLS severity thresholds aligned with Google's Good / Needs Improvement / Poor scale — CLS 0.1–0.25 now flagged High, not just >0.25 as Critical
- Meta description "short" threshold updated from <120 chars to <100 chars; added >155 chars mobile truncation risk flag
- Keyword density calculation now noted as a secondary heuristic that defers to entity/topic coverage as the primary signal
- "Some pages" wording clarified to "consolidate into one finding; list all affected file paths in the Location field"
- Priority Fix Matrix example columns aligned with CSV export definition — removed Revenue Impact / Time to Impact / Business Value columns; standardized on Fix Type
- Title & Meta Description Optimization template updated to use the <100 chars threshold

## [v5.0] - 2026-07-15

### Added
- Keyword placement scoring across five highest-signal zones (title, H1, URL slug, first paragraph, H2) in Pillar 1
- Staging / dev subdomain detection (publicly accessible staging environments, leaked canonical/OG references, auth-gating recommendations) in Pillar 2
- URL slug quality evaluation (keyword inclusion, stop word bloat, meaningfulness, length) in Pillar 4
- Sitemap URL inventory analysis (URL categorization by type, low-value inflation detection, sitemap cleanup) in Pillar 9
- OG/Twitter quality review beyond presence checks (og:image dimensions, og:title divergence, twitter:card type appropriateness, og:description quality) in Pillar 10
- Two-layer trust page verification (Exists + Reachable) and automated contact pathway detection in Pillar 16
- Mandatory Evidence / Impact / Fix three-part finding format to the Output Blueprint
- 6 detailed report detail writing rules to the report-writing section
- 5 new prompt templates (E-E-A-T Deep Audit, Staging Environment Audit, URL Slug & Keyword Placement Audit, Social SEO Quality Audit, Sitemap URL Inventory Audit) — total 22

### Fixed
- Audit-and-fix pass resolving 38 issues: consolidated duplicate sections, resolved contradictions, added thresholds, and corrected counts across the skill

## [v4.2] - 2026-07-11

### Added
- IndexNow protocol setup and submission guidance to Pillar 9 (key file hosting, HTTP POST to api.indexnow.org, response code reference, curl test command)
- Missing title tag detection with fix workflow, short title remediation, meta description A/B testing framework, Bing Webmaster Tools monitoring recommendation, and quarterly review cycle to Pillar 1
- Social Share Buttons check (Pillar 10): share links on content pages with pre-filled text and URL parameters
- `llms.txt` check (Pillar 18): verify a machine-readable summary file is published at the site root for LLM discoverability
- 2 new prompt templates (Title & Meta Description Optimization, IndexNow Setup)
- Conclusion section with F9XR Team attribution

## [v4.1] - 2026-07-10

### Added
- Video & YouTube SEO pillar — extended from 23 to 24 pillars
- Expanded Process first pass with detailed workspace exploration
- Voice Search Optimization as an explicit sub-discipline within Pillar 18
- Keyword density calculation methodology to Pillar 7
- 2 new prompt templates

## [v4.0] - 2026-07-10

### Added
- Enterprise task-force persona
- Crawl orchestration & discovery phase (URL discovery from sitemap/internal links/canonicals/pagination/hreflang, orphan detection, indexability matrix, click-depth mapping)
- Competitor SEO Analysis pillar — extended from 22 to 23 pillars
- Advanced Semantic SEO depth
- Closed all remaining prompt gaps: FCP/TTFB in CWV pillar, mobile/desktop performance split, redirect loop detection, soft 404s, broken external links, parameterized URLs, infinite crawl traps, crawl budget analysis, CDN/compression/caching/server-response audits, duplicate page/metadata detection, CTR/SERP optimization checks, structured content layout, table optimization, Organization/Service/Person schema, E-E-A-T Experience signal, reputation audit, content credibility scoring, unified trust signal audit
- 4 new prompt templates
- CSV export, per-finding Implementation Guidance + Fix Type fields, Medium-Term and Long-Term sections, and Revenue/Traffic Opportunity analysis sections to the Output Blueprint

## [v3.0] - 2026-07-10

### Added
- Auditor persona, core principles, 5-pass process workflow, restraint-and-critique section, and report-writing guidance
- JavaScript Framework SEO (Next.js/Nuxt/Astro/SPA), EEAT Signals, Rich Results Eligibility map, AI/SGE/LLM Optimization, CI/CD & Automation pipeline, Migration SEO, Content Pruning & Consolidation, and Third-Party Script Audit pillars — extended from 14 to 22 pillars
- 7 new prompt templates

## [v2.0] - 2026-07-10

### Added
- Performance SEO (CWV), Mobile SEO, URL Architecture, Internal Linking, XML Sitemaps & Robots.txt, Security SEO, Accessibility SEO, E-Commerce SEO, Blog SEO, and enhanced cross-file analysis — extended from 5 to 14 pillars
- Prompt templates and Quick Wins section to the output

## [v1.0] - 2026-07-10

### Added
- Initial release with 5 core pillars