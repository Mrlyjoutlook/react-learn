# react-learn

> 尝鲜每个 react 新特性的学习，一些最佳实践

## React.lazy: Code-Splitting with Suspense(react@16.6)

所有的案例都采用`React.lazy`新特性来懒加载组件，搭配`react-router-dom`来做页面的`code splitting`。

同样你也可以使用优秀的 lib 来做`code splitting`，如`react-loadable`。

```javascript
# 该用例采用react-loadable，来做到懒加载组件和动态添加扩展redux store，具体请移看本author`rf`项目
export default function LoginRoute({ store, ...props }) {
  return (
    <Route
      {...props}
      component={Loadable.Map({
        loader: {
          Login: () =>
            import(/* webpackChunkName: "login" */ './components/LoginContainer'),
          reducer: () =>
            import(/* webpackChunkName: "loginReduer" */ './modules/loginReduer'),
        },
        render(loaded) {
          const Login = loaded.Login.default;
          const reducer = loaded.reducer.default;
          injectReducer(store, { key: 'login', reducer });
          return <Login />;
        },
        loading() {
          return <div>Loading...</div>;
        },
        delay: 300,
      })}
    />
  );
}
```

除了懒加载外，也可以是用其来做预加载

## css-modules

create-react-app@2.x 版本自带支持 css-modules 功能，无需对配置文件`eject`，只需要对用 css 文件增加`module`后缀既可以启用改功能。

如果你嫌麻烦每次都如下使用，你可以采用[babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules) 或者 [react-css-modules](https://github.com/gajus/react-css-modules)

推荐采用`babel-plugin-react-css-modules`，因为该工具在编译时就已经处理，性能开销更小，但修改 webpack 需要运行`npm run eject`

```javascript
...
import styles from './index.module.css';

<div className={styles.container}></div>
...
```

## css-in-js
