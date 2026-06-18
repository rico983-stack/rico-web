export type PostStatus = 'draft' | 'published'

export type BlogFaqItem = {
  question: string
  answer: string
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  cover_image_url: string | null
  seo_title: string | null
  meta_description: string | null
  focus_keyword: string | null
  location_tags: string[] | null
  service_category: string | null
  faq: BlogFaqItem[] | null
  cta_text: string | null
  status: PostStatus
  published_at: string | null
  created_at: string
  updated_at: string
  author_id: string | null
}

export type BlogPostFormValues = {
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image_url: string
  seo_title: string
  meta_description: string
  focus_keyword: string
  location_tags: string
  service_category: string
  faq: string
  cta_text: string
  status: PostStatus
  published_at: string
}

export type BlogPostPayload = {
  title: string
  slug: string
  excerpt: string | null
  content: string
  cover_image_url: string | null
  seo_title: string | null
  meta_description: string | null
  focus_keyword: string | null
  location_tags: string[]
  service_category: string | null
  faq: BlogFaqItem[]
  cta_text: string | null
  status: PostStatus
  published_at: string | null
  author_id: string
}
