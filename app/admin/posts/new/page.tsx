import AdminGuard from '@/components/blog/AdminGuard'
import PostForm from '@/components/blog/PostForm'

export default function NewPostPage() {
  return (
    <AdminGuard>
      <PostForm mode="create" />
    </AdminGuard>
  )
}
