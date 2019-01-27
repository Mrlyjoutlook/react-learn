import React, { lazy, Suspense } from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';

const Container = lazy(() =>
  import(/* webpackChunkName: "lazy" */ './components/container')
);

export default function LazyRoute(props: RouteProps) {
  return (
    <Route
      {...props}
      render={(routeProps: RouteComponentProps) => {
        return (
          <Suspense fallback={null}>
            <Container />
          </Suspense>
        );
      }}
    />
  );
}
