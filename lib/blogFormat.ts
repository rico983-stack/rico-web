import type { BlogFaqItem, BlogPost, BlogPostFormValues, BlogPostPayload, PostStatus } from '@/types/blog'

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function parseTags(value: string) {
  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
}

export function formatTags(tags: string[] | null) {
  return tags?.join(', ') ?? ''
}

export function parseFaq(value: string): BlogFaqItem[] {
  const trimmed = value.trim()

  if (!trimmed) return []

  if (trimmed.includes('｜') || trimmed.includes('|')) {
    return trimmed
      .split('\n')
      .map((row) => row.trim())
      .filter(Boolean)
      .map((row) => {
        const separator = row.includes('｜') ? '｜' : '|'
        const [question, ...answerParts] = row.split(separator)
        return {
          question: question?.trim() ?? '',
          answer: answerParts.join(separator).trim(),
        }
      })
      .filter((item) => item.question && item.answer)
  }

  return trimmed
    .split(/\n\s*\n/)
    .map((block) => block.split('\n').map((row) => row.trim()).filter(Boolean))
    .map(([question, ...answerRows]) => ({
      question: question ?? '',
      answer: answerRows.join('\n').trim(),
    }))
    .filter((item) => item.question && item.answer)
}

export function formatFaq(faq: BlogFaqItem[] | null) {
  if (!Array.isArray(faq)) return ''

  return faq
    .filter((item) => item.question && item.answer)
    .map((item) => `${item.question}\n${item.answer}`)
    .join('\n\n')
}

export function postToFormValues(post?: BlogPost): BlogPostFormValues {
  return {
    title: post?.title ?? '',
    slug: post?.slug ?? '',
    excerpt: post?.excerpt ?? '',
    content: post?.content ?? '',
    cover_image_url: post?.cover_image_url ?? '',
    seo_title: post?.seo_title ?? '',
    meta_description: post?.meta_description ?? '',
    focus_keyword: post?.focus_keyword ?? '',
    location_tags: formatTags(post?.location_tags ?? null),
    service_category: post?.service_category ?? '',
    faq: formatFaq(post?.faq ?? null),
    cta_text: post?.cta_text ?? '',
    status: post?.status ?? 'draft',
    published_at: post?.published_at ? post.published_at.slice(0, 16) : '',
  }
}

export function formValuesToPayload(values: BlogPostFormValues, authorId: string): BlogPostPayload {
  const status: PostStatus = values.status
  const publishedAt =
    status === 'published'
      ? values.published_at
        ? new Date(values.published_at).toISOString()
        : new Date().toISOString()
      : null

  return {
    title: values.title.trim(),
    slug: slugify(values.slug || values.title),
    excerpt: values.excerpt.trim() || null,
    content: values.content.trim(),
    cover_image_url: values.cover_image_url.trim() || null,
    seo_title: values.seo_title.trim() || null,
    meta_description: values.meta_description.trim() || null,
    focus_keyword: values.focus_keyword.trim() || null,
    location_tags: parseTags(values.location_tags),
    service_category: values.service_category.trim() || null,
    faq: parseFaq(values.faq),
    cta_text: values.cta_text.trim() || null,
    status,
    published_at: publishedAt,
    author_id: authorId,
  }
}
