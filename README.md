# mak pashilkar portfolio

A static React + TypeScript portfolio using four supplied pixel-art lake scenes, selected by the visitor's local time. There is no backend, analytics, tracking, or API key.

## Edit the portfolio

Most updates only require editing **`src/data/portfolio.ts`**.

1. **Name and introduction:** update `name`, `headline`, `intro`, `about`, `location`, `availability`, and `interests`.
2. **Skills:** add, edit, or remove one object in the `skills` array. Use a unique `id`, one of the categories `Frontend`, `Backend`, `AI`, or `Creative`, and an optional short `description`.
3. **Experience:** add an object to `experience`. Keep `published: false` until the entry is ready. Published entries support role, organization, dates, summary, responsibilities, skills, and an optional link.
4. **Projects:** add an object to `projects`. Set `published: true` only when the description and links are real. Set `thumbnail` to a real asset path such as `/project-food.svg`, and provide `thumbnailAlt` for accessible image text.
5. **Links and email:** update `socialLinks`. Empty values stay hidden, so the site never shows fake destinations.
6. **Resume:** set `resumeUrl` to a real PDF URL when available, then add a resume link where you want it shown.
7. **SEO and domain:** update `seo.title`, `seo.description`, `seo.siteUrl`, and `seo.ogImage`. Also update the matching canonical, Open Graph, and structured-data values in `index.html` once the final domain is known.
8. **Sections:** set a value in `visibility` to `false` to hide that section.

### Example skill

```ts
{ id: 'typescript', name: 'TypeScript', category: 'Frontend', icon: 'TS', description: 'Typed interfaces for dependable products.' }
```

### Example published project

```ts
{
  id: 'project-id',
  name: 'Project name',
  description: 'A concise, accurate description.',
  thumbnail: '/project-crt.svg',
  tags: ['React', 'Design'],
  category: 'Web',
  liveUrl: 'https://your-real-demo.example',
  sourceUrl: 'https://your-real-source.example',
  featured: true,
  published: true,
  status: 'Live',
}
```

## Local work and deployment

The project uses the standard Vite workflow. Run `npm install` once, then `npm run dev` for local editing. Use `npm run build` to create the production files, and deploy the project to Vercel using the default Vite build settings.

## Time-based lake scenes and clock

The hero uses the supplied files in `public/images/` and switches from the browser's local time: dawn 05:00–07:59, day 08:00–16:59, sunset 17:00–18:59, and night 19:00–04:59. The compact clock in the bottom-right uses the same local time and updates once per second. Change the scene boundaries or image paths in `src/utils/sceneTime.ts`.

The supplied scene files are preserved as-is. The hero uses `object-fit: cover`; responsive positioning is defined in `src/index.css`. The navigation theme button switches the interface between dark and light mode without changing the time-selected landscape, and stores that preference locally. The hero name types in once on first load and becomes immediate when reduced motion is enabled.

## SEO note

The important metadata is present in `index.html`, and portfolio content is rendered as semantic HTML after the React application loads. This project intentionally stays a simple static Vite app rather than adding a heavier framework for prerendering. If server-rendered HTML becomes a priority, use a prerendering step or a framework that generates the homepage HTML and update this note after verifying the output.

The sitemap is intentionally not included until the final production domain is known. Do not publish a sitemap with a placeholder URL. Once the domain is final, add `public/sitemap.xml` with that real URL and update the canonical and social metadata together.

## Files beginners normally edit

- `src/data/portfolio.ts` for personal content and links.
- `index.html` for the final domain and metadata synchronization.
- `public/lake-hero.svg` for the main illustrated landscape.
- `public/portrait.svg` for the About artwork.
- `public/project-*.svg` for project thumbnails.
- `src/index.css` only when changing the visual theme or overlay treatment.
