import BarChartIcon from '@mui/icons-material/BarChart'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CollectionsIcon from '@mui/icons-material/Collections'
import LabelIcon from '@mui/icons-material/Label'
import PhotoIcon from '@mui/icons-material/Photo'

import SettingsIcon from '@mui/icons-material/Settings'

import { Authenticated, ErrorComponent, Refine } from '@refinedev/core'
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools'
import routerProvider, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import { Layout } from '@/components/layout'
import { BookIcon } from '@/icons'
import { PageCategoryCreate } from '@/pages/blog/categories/create'
import { PageCategoryEdit } from '@/pages/blog/categories/edit'
import { PageCategoryList } from '@/pages/blog/categories/list'

import { PageBlogCreate } from '@/pages/blog/create'
import { PageBlogEdit } from '@/pages/blog/edit'
import { PageBlogList } from '@/pages/blog/list'
import { PageBlogShow } from '@/pages/blog/show'
import { PageTagCreate } from '@/pages/blog/tags/create'
import { PageTagEdit } from '@/pages/blog/tags/edit'
import { PageTagList } from '@/pages/blog/tags/list'

import { PageLogin } from '@/pages/login'

import { PhotoAlbumList } from '@/pages/photos/albums/list'
import { PhotoAnalytics } from '@/pages/photos/analytics/index'
import { PhotoImageList } from '@/pages/photos/images/list'
import { PhotoImageUpload } from '@/pages/photos/images/upload'
import { PhotoSettingsList } from '@/pages/photos/settings/list'
import { PhotoStorageList } from '@/pages/photos/storage/list'

import { PhotoTagList } from '@/pages/photos/tags/list'
import { accessControlProvider } from '@/providers/access-control'
import { authProvider } from '@/providers/auth-provider'
import { dataProvider, photoDataProvider } from '@/providers/data'
import { useNotificationProvider } from '@/providers/notification-provider'
import { queryClient } from '@/providers/query-client'
import { ThemeProvider } from '@/providers/theme-provider'

import '@/utilities/init-dayjs'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <DevtoolsProvider>
          <Refine
            accessControlProvider={accessControlProvider}
            authProvider={authProvider}
            routerProvider={routerProvider}
            dataProvider={{
              default: dataProvider,
              photos: photoDataProvider,
            }}
            notificationProvider={useNotificationProvider}
            resources={[
              {
                name: 'blog',
                meta: {
                  label: 'Blog',
                },
              },
              {
                name: 'blogs',
                list: '/blog/posts',
                create: '/blog/posts/create',
                edit: '/blog/posts/:id/edit',
                show: '/blog/posts/:id',
                meta: {
                  parent: 'blog',
                  label: '博客管理',
                  icon: <BookIcon />,
                },
              },
              {
                name: 'categories',
                list: '/blog/categories',
                create: '/blog/categories/create',
                edit: '/blog/categories/:id/edit',
                meta: {
                  parent: 'blog',
                  label: 'Categories',
                  hide: true,
                },
              },
              {
                name: 'tags',
                list: '/blog/tags',
                create: '/blog/tags/create',
                edit: '/blog/tags/:id/edit',
                meta: {
                  parent: 'blog',
                  label: 'Tags',
                  hide: true,
                },
              },
              {
                name: 'photos',
                meta: { label: '相册管理' },
              },
              {
                name: 'photo-images',
                list: '/photos/images',
                create: '/photos/images/upload',
                meta: {
                  parent: 'photos',
                  label: '图片管理',
                  icon: <PhotoIcon />,
                  dataProviderName: 'photos',
                },
              },
              {
                name: 'photo-albums',
                list: '/photos/albums',
                meta: {
                  parent: 'photos',
                  label: '相册管理',
                  icon: <CollectionsIcon />,
                  dataProviderName: 'photos',
                },
              },
              {
                name: 'photo-tags',
                list: '/photos/tags',
                meta: {
                  parent: 'photos',
                  label: '标签管理',
                  icon: <LabelIcon />,
                  dataProviderName: 'photos',
                },
              },
              {
                name: 'photo-configs',
                list: '/photos/settings',
                meta: {
                  parent: 'photos',
                  label: '配置管理',
                  icon: <SettingsIcon />,
                  dataProviderName: 'photos',
                },
              },
              {
                name: 'photo-analytics',
                list: '/photos/analytics',
                meta: {
                  parent: 'photos',
                  label: '访问统计',
                  icon: <BarChartIcon />,
                  dataProviderName: 'photos',
                },
              },
              {
                name: 'photo-storage',
                list: '/photos/storage',
                meta: {
                  parent: 'photos',
                  label: '存储管理',
                  icon: <CloudUploadIcon />,
                  dataProviderName: 'photos',
                },
              },
            ]}
            options={{
              reactQuery: {
                clientConfig: queryClient,
              },
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            <Routes>
              <Route
                element={(
                  <Authenticated
                    key="authenticated-routes"
                    redirectOnFail="/login"
                  >
                    <Outlet />
                  </Authenticated>
                )}
              >
                <Route
                  index
                  element={<NavigateToResource resource="blogs" />}
                />

                <Route
                  path="blog"
                  element={(
                    <Layout>
                      <Outlet />
                    </Layout>
                  )}
                >
                  <Route path="posts" element={<Outlet />}>
                    <Route index element={<PageBlogList />} />
                    <Route path="create" element={<PageBlogCreate />} />
                    <Route path=":id/edit" element={<PageBlogEdit />} />
                    <Route path=":id" element={<PageBlogShow />} />
                  </Route>
                  <Route path="categories" element={<Outlet />}>
                    <Route index element={<PageCategoryList />} />
                    <Route path="create" element={<PageCategoryCreate />} />
                    <Route path=":id/edit" element={<PageCategoryEdit />} />
                  </Route>
                  <Route path="tags" element={<Outlet />}>
                    <Route index element={<PageTagList />} />
                    <Route path="create" element={<PageTagCreate />} />
                    <Route path=":id/edit" element={<PageTagEdit />} />
                  </Route>
                </Route>

                <Route
                  path="photos"
                  element={(
                    <Layout>
                      <Outlet />
                    </Layout>
                  )}
                >
                  <Route path="images" element={<Outlet />}>
                    <Route index element={<PhotoImageList />} />
                    <Route path="upload" element={<PhotoImageUpload />} />
                  </Route>
                  <Route path="albums" element={<PhotoAlbumList />} />
                  <Route path="tags" element={<PhotoTagList />} />
                  <Route path="settings" element={<PhotoSettingsList />} />
                  <Route path="analytics" element={<PhotoAnalytics />} />
                  <Route path="storage" element={<PhotoStorageList />} />
                </Route>
              </Route>

              <Route
                element={(
                  <Authenticated key="auth-pages" fallback={<Outlet />}>
                    <NavigateToResource resource="blogs" />
                  </Authenticated>
                )}
              >
                <Route path="/login" element={<PageLogin />} />
              </Route>

              <Route
                element={(
                  <Authenticated key="catch-all">
                    <Layout>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                )}
              >
                <Route path="*" element={<ErrorComponent />} />
              </Route>
            </Routes>

            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
            <Toaster position="bottom-right" reverseOrder={false} />
            <DevtoolsPanel />
          </Refine>
        </DevtoolsProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
