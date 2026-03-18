import { Authenticated, ErrorComponent, Refine } from "@refinedev/core";
import { DevtoolsProvider, DevtoolsPanel } from "@refinedev/devtools";
import routerProvider, {
  UnsavedChangesNotifier,
  DocumentTitleHandler,
  NavigateToResource,
} from "@refinedev/react-router";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

import { PageLogin } from "@/pages/login";

import { PageBlogList } from "@/pages/blog/list";
import { PageBlogCreate } from "@/pages/blog/create";
import { PageBlogEdit } from "@/pages/blog/edit";
import { PageBlogShow } from "@/pages/blog/show";
import { PageCategoryList } from "@/pages/blog/categories/list";
import { PageCategoryCreate } from "@/pages/blog/categories/create";
import { PageCategoryEdit } from "@/pages/blog/categories/edit";
import { PageTagList } from "@/pages/blog/tags/list";
import { PageTagCreate } from "@/pages/blog/tags/create";
import { PageTagEdit } from "@/pages/blog/tags/edit";

import { Layout } from "@/components/layout";

import { ThemeProvider } from "@/providers/theme-provider";
import { authProvider } from "@/providers/auth-provider";
import { accessControlProvider } from "@/providers/access-control";
import { useNotificationProvider } from "@/providers/notification-provider";
import { queryClient } from "@/providers/query-client";
import { dataProvider } from "@/providers/data";

import { BookIcon } from "@/icons";

import "@/utilities/init-dayjs";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <DevtoolsProvider>
          <Refine
            accessControlProvider={accessControlProvider}
            authProvider={authProvider}
            routerProvider={routerProvider}
            dataProvider={dataProvider}
            notificationProvider={useNotificationProvider}
            resources={[
              {
                name: "blog",
                meta: {
                  label: "Blog",
                },
              },
              {
                name: "blogs",
                list: "/blog/posts",
                create: "/blog/posts/create",
                edit: "/blog/posts/:id/edit",
                show: "/blog/posts/:id",
                meta: {
                  parent: "blog",
                  label: "博客管理",
                  icon: <BookIcon />,
                },
              },
              {
                name: "categories",
                list: "/blog/categories",
                create: "/blog/categories/create",
                edit: "/blog/categories/:id/edit",
                meta: {
                  parent: "blog",
                  label: "Categories",
                  hide: true,
                },
              },
              {
                name: "tags",
                list: "/blog/tags",
                create: "/blog/tags/create",
                edit: "/blog/tags/:id/edit",
                meta: {
                  parent: "blog",
                  label: "Tags",
                  hide: true,
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
                element={
                  <Authenticated
                    key="authenticated-routes"
                    redirectOnFail="/login"
                  >
                    <Outlet />
                  </Authenticated>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="blogs" />}
                />

                <Route
                  path="blog"
                  element={
                    <Layout>
                      <Outlet />
                    </Layout>
                  }
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
              </Route>

              <Route
                element={
                  <Authenticated key="auth-pages" fallback={<Outlet />}>
                    <NavigateToResource resource="blogs" />
                  </Authenticated>
                }
              >
                <Route path="/login" element={<PageLogin />} />
              </Route>

              <Route
                element={
                  <Authenticated key="catch-all">
                    <Layout>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                }
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
  );
};

export default App;
