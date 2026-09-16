# 📝 DigixCRM: SEO Writing & Formatting Manual

This guide is for the SEO and Content teams. It explains how to use our high-authority blog system to publish articles that rank on Google and convert visitors.

---

## 1. Setting up your Workspace
Every blog post lives in its own "Page Bundle" folder. This keeps images and text organized.

1.  **Text Folder**: Create a new folder in `content/blog/post-name/`.
2.  **Text File**: Rename the **TEMPLATE.mdx** to `index.mdx` and put it in that folder.
3.  **Image Folder**: Create a new folder in `public/blog/post-name/`.
4.  **Image Files**: Drop all your photos into that public folder.

---

## 2. Filling the Metadata (Top Section)
The code between the `---` lines is the most important for SEO.

| Field | Description | Requirement |
| :--- | :--- | :--- |
| **`title`** | The main name of the post. | Use your primary keyword. |
| **`slug`** | The URL part. | `my-perfect-guide` (use dashes, no spaces). |
| **`excerpt`** | The 2-sentence summary. | Google uses this in search results. |
| **`author`** | Expert name. | Builds E-E-A-T score. |
| **`coverImage`** | The hero photo. | Path must start with `/blog/...`. |

---

## 3. Mastering Headings (H2, H3)
Search engines use headings to map your content.

*   **Main Point**: Use `## Your Heading` (Google sees this as H2).
*   **Sub Point**: Use `### Your Sub-heading` (Google sees this as H3).

> [!CAUTION]
> **Never use `#`** inside your text. The system already adds one `#` for the title. Google penalizes pages with multiple H1 tags.

---

## 4. Special "Magazine Mode" Callouts
Make your content look like HubSpot or OnePageCRM by using these advanced blocks. Start a line with `> [!KEYWORD]`.

### 💡 The Executive Summary
Put this at the very top of your article to capture AI answer engines.
`> [!SUMMARY] Your smart 3-sentence briefing here.`

### 💡 Pro Tips
Use this for actionable sales advice.
`> [!PROTIP] Always follow up within 5 minutes of a lead signing up.`

### 💡 Worth Noting
Use this for interesting facts or extra context.
`> [!NOTE] 60% of sales reps lose deals due to slow data entry.`

---

## 5. Winning Google Featured Snippets (FAQ)
Google loves the FAQ section in our blog. Fill out at least 3-4 questions in the metadata section at the top.

```yaml
faq:
  - q: "Question 1?"
    a: "Direct answer with keywords."
  - q: "Question 2?"
    a: "Keep it under 40 words for best results."
```

---

## 6. Standard Formatting
*   **Links**: `[Click here](/contact)` or `[Read more](https://google.com)`
*   **Bold**: `**this text is bold**`
*   **Images in Body**: `![Alt text description](/blog/post-name/my-photo.jpg)`
*   **Bullet Points**: Start with a dash `-`

---

## ✅ Final SEO Checklist Before Saving:
- [ ] **Slug** is short and has no spaces.
- [ ] **Hero Image** path starts with `/blog/`.
- [ ] **## Headings** are used for all main sections.
- [ ] **FAQ section** has at least 3 entries.
- [ ] **Executive Summary** is at the top.

---
*Created by Antigravity for DigixCRM Enterprise SEO Team.*
