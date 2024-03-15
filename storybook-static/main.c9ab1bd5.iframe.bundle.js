(self.webpackChunkproduction_project =
  self.webpackChunkproduction_project || []).push([
  [179],
  {
    "./config/storybook/preview.js-generated-config-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      const preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          parameters: () => parameters,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.for-each.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-properties.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-property.js",
        );
      const ClientApi = __webpack_require__(
        "./node_modules/@storybook/client-api/dist/esm/ClientApi.js",
      );
      const client = __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js",
      );
      const ThemeDecorator =
        (__webpack_require__("./src/app/styles/index.scss"),
        __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
        ));
      const ThemeProvider = __webpack_require__(
        "./src/app/providers/ThemeProvider/index.tsx",
      );
      const dist = __webpack_require__(
        "./node_modules/react-router-dom/dist/index.js",
      );
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const RouterDecorator = function RouteDecorator(story) {
        return (0, jsx_runtime.jsx)(dist.VK, { children: story() });
      };
      RouteDecorator.displayName = "RouteDecorator";
      try {
        (RouteDecorator.displayName = "RouteDecorator"),
          (RouteDecorator.__docgenInfo = {
            description: "",
            displayName: "RouteDecorator",
            props: {},
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/shared/config/storybook/RouteDecorator/RouteDecorator.tsx#RouteDecorator"
            ] = {
              docgenInfo: RouteDecorator.__docgenInfo,
              name: "RouteDecorator",
              path: "src/shared/config/storybook/RouteDecorator/RouteDecorator.tsx#RouteDecorator",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var parameters = {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
          matchers: { color: /(background|color)$/i, date: /Date$/ },
        },
      };
      function ownKeys(object, enumerableOnly) {
        const keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          let symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(
              (sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable,
            )),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      (0, client.addDecorator)((story) => story()),
        (0, client.addDecorator)((0, ThemeDecorator.F)(ThemeProvider.Q2.LIGHT)),
        (0, client.addDecorator)(RouteDecorator),
        Object.keys(preview_namespaceObject).forEach((key) => {
          const value = preview_namespaceObject[key];
          switch (key) {
            case "args":
              return (0, ClientApi.uc)(value);
            case "argTypes":
              return (0, ClientApi.v9)(value);
            case "decorators":
              return value.forEach((decorator) =>
                (0, ClientApi.$9)(decorator, !1),
              );
            case "loaders":
              return value.forEach((loader) => (0, ClientApi.HZ)(loader, !1));
            case "parameters":
              return (0, ClientApi.h1)(
                (function _objectSpread(target) {
                  for (let i = 1; i < arguments.length; i++) {
                    var source = arguments[i] != null ? arguments[i] : {};
                    i % 2
                      ? ownKeys(Object(source), !0).forEach((key) => {
                          _defineProperty(target, key, source[key]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            target,
                            Object.getOwnPropertyDescriptors(source),
                          )
                        : ownKeys(Object(source)).forEach((key) => {
                            Object.defineProperty(
                              target,
                              key,
                              Object.getOwnPropertyDescriptor(source, key),
                            );
                          });
                  }
                  return target;
                })({}, value),
                !1,
              );
            case "argTypesEnhancers":
              return value.forEach((enhancer) => (0, ClientApi.My)(enhancer));
            case "argsEnhancers":
              return value.forEach((enhancer) => (0, ClientApi._C)(enhancer));
            case "render":
              return (0, ClientApi.$P)(value);
            case "globals":
            case "globalTypes":
              var v = {};
              return (v[key] = value), (0, ClientApi.h1)(v, !1);
            case "__namedExportsOrder":
            case "decorateStory":
            case "renderToDOM":
              return null;
            default:
              return console.log(`${key} was not supported :( !`);
          }
        });
    },
    "./src/pages/AboutPage/ui/AboutPage.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => AboutPage_stories,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./src/app/styles/index.scss");
      const ThemeDecorator = __webpack_require__(
        "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
      );
      const ThemeProvider = __webpack_require__(
        "./src/app/providers/ThemeProvider/index.tsx",
      );
      const useTranslation = __webpack_require__(
        "./node_modules/react-i18next/dist/es/useTranslation.js",
      );
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const AboutPage = function AboutPage() {
        const { t } = (0, useTranslation.$)("about");
        return (0, jsx_runtime.jsx)("div", { children: t("О сайте") });
      };
      AboutPage.displayName = "AboutPage";
      const ui_AboutPage = AboutPage;
      const AboutPage_stories = {
        title: "pages/AboutPage",
        component: ui_AboutPage,
        argTypes: { backgroundColor: { control: "color" } },
      };
      const Template = function Template(args) {
        return (0, jsx_runtime.jsx)(ui_AboutPage, { ...args });
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = {
          storySource: {
            source:
              "(args) => (\n  // @ts-ignore TODO решить типизацию\n  <AboutPage {...args} />\n)",
          },
          ...Light.parameters,
        }),
        (Dark.parameters = {
          storySource: {
            source:
              "(args) => (\n  // @ts-ignore TODO решить типизацию\n  <AboutPage {...args} />\n)",
          },
          ...Dark.parameters,
        });
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/pages/MainPage/ui/MainPage.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => MainPage_stories,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./src/app/styles/index.scss");
      const ThemeDecorator = __webpack_require__(
        "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
      );
      const ThemeProvider = __webpack_require__(
        "./src/app/providers/ThemeProvider/index.tsx",
      );
      const useTranslation = __webpack_require__(
        "./node_modules/react-i18next/dist/es/useTranslation.js",
      );
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const MainPage = function MainPage() {
        const { t } = (0, useTranslation.$)();
        return (0, jsx_runtime.jsx)("div", { children: t("Главная страница") });
      };
      MainPage.displayName = "MainPage";
      const ui_MainPage = MainPage;
      const MainPage_stories = {
        title: "pages/MainPage",
        component: ui_MainPage,
        argTypes: { backgroundColor: { control: "color" } },
      };
      const Template = function Template(args) {
        return (0, jsx_runtime.jsx)(ui_MainPage, { ...args });
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = {
          storySource: {
            source:
              "(args) => (\n  // @ts-ignore TODO решить типизацию\n  <MainPage {...args} />\n)",
          },
          ...Light.parameters,
        }),
        (Dark.parameters = {
          storySource: {
            source:
              "(args) => (\n  // @ts-ignore TODO решить типизацию\n  <MainPage {...args} />\n)",
          },
          ...Dark.parameters,
        });
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => NotFoundPage_stories,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./src/app/styles/index.scss");
      const ThemeDecorator = __webpack_require__(
        "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
      );
      const ThemeProvider = __webpack_require__(
        "./src/app/providers/ThemeProvider/index.tsx",
      );
      const classNames = __webpack_require__(
        "./src/shared/lib/classNames/classNames.ts",
      );
      const useTranslation = __webpack_require__(
        "./node_modules/react-i18next/dist/es/useTranslation.js",
      );
      const injectStylesIntoStyleTag = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
      );
      const injectStylesIntoStyleTag_default = __webpack_require__.n(
        injectStylesIntoStyleTag,
      );
      const styleDomAPI = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
      );
      const styleDomAPI_default = __webpack_require__.n(styleDomAPI);
      const insertBySelector = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertBySelector.js",
      );
      const insertBySelector_default = __webpack_require__.n(insertBySelector);
      const setAttributesWithoutAttributes = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
      );
      const setAttributesWithoutAttributes_default = __webpack_require__.n(
        setAttributesWithoutAttributes,
      );
      const insertStyleElement = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
      );
      const insertStyleElement_default =
        __webpack_require__.n(insertStyleElement);
      const styleTagTransform = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
      );
      const styleTagTransform_default =
        __webpack_require__.n(styleTagTransform);
      const NotFoundPage_module = __webpack_require__(
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss",
      );
      const options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(NotFoundPage_module.Z, options);
      const ui_NotFoundPage_module =
        NotFoundPage_module.Z && NotFoundPage_module.Z.locals
          ? NotFoundPage_module.Z.locals
          : void 0;
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const NotFoundPage = function NotFoundPage(_ref) {
        const { className } = _ref;
        const { t } = (0, useTranslation.$)();
        return (0, jsx_runtime.jsx)("div", {
          className: (0, classNames.A)(
            ui_NotFoundPage_module.NotFoundPage,
            {},
            [className],
          ),
          children: t("Страница не найдена"),
        });
      };
      NotFoundPage.displayName = "NotFoundPage";
      try {
        (NotFoundPage.displayName = "NotFoundPage"),
          (NotFoundPage.__docgenInfo = {
            description: "",
            displayName: "NotFoundPage",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage"
            ] = {
              docgenInfo: NotFoundPage.__docgenInfo,
              name: "NotFoundPage",
              path: "src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const NotFoundPage_stories = {
        title: "pages/NotFoundPage",
        component: NotFoundPage,
        argTypes: { backgroundColor: { control: "color" } },
      };
      const Template = function Template(args) {
        return (0, jsx_runtime.jsx)(NotFoundPage, { ...args });
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = {
          storySource: {
            source: "(args) => (\n  <NotFoundPage {...args} />\n)",
          },
          ...Light.parameters,
        }),
        (Dark.parameters = {
          storySource: {
            source: "(args) => (\n  <NotFoundPage {...args} />\n)",
          },
          ...Dark.parameters,
        });
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/shared/ui/AppLink/AppLink.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          Primary: () => Primary,
          Secondary: () => Secondary,
          Red: () => Red,
          PrimaryDark: () => PrimaryDark,
          SecondaryDark: () => SecondaryDark,
          RedDark: () => RedDark,
          __namedExportsOrder: () => __namedExportsOrder,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./src/app/styles/index.scss");
      const shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__("./src/shared/ui/AppLink/AppLink.tsx");
      const shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
        );
      const app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__("./src/app/providers/ThemeProvider/index.tsx");
      const react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "shared/AppLink",
        component: shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_4__.F,
        argTypes: { backgroundColor: { control: "color" } },
        args: { to: "" },
      };
      const Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
          shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_4__.F,
          { ...args },
        );
      };
      Template.displayName = "Template";
      var Primary = Template.bind({});
      Primary.args = {
        children: "Text",
        theme: shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_4__.u.PRIMARY,
      };
      var Secondary = Template.bind({});
      Secondary.args = {
        children: "Text",
        theme:
          shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_4__.u.SECONDARY,
      };
      var Red = Template.bind({});
      Red.args = {
        children: "Text",
        theme: shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_4__.u.RED,
      };
      var PrimaryDark = Template.bind({});
      (PrimaryDark.args = {
        children: "Text",
        theme: shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_4__.u.PRIMARY,
      }),
        (PrimaryDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_5__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.Q2.DARK,
          ),
        ]);
      var SecondaryDark = Template.bind({});
      (SecondaryDark.args = {
        children: "Text",
        theme:
          shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_4__.u.SECONDARY,
      }),
        (SecondaryDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_5__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.Q2.DARK,
          ),
        ]);
      var RedDark = Template.bind({});
      (RedDark.args = {
        children: "Text",
        theme: shared_ui_AppLink_AppLink__WEBPACK_IMPORTED_MODULE_4__.u.RED,
      }),
        (RedDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_5__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.Q2.DARK,
          ),
        ]),
        (Primary.parameters = {
          storySource: { source: "(args) => (\n  <AppLink {...args} />\n)" },
          ...Primary.parameters,
        }),
        (Secondary.parameters = {
          storySource: { source: "(args) => (\n  <AppLink {...args} />\n)" },
          ...Secondary.parameters,
        }),
        (Red.parameters = {
          storySource: { source: "(args) => (\n  <AppLink {...args} />\n)" },
          ...Red.parameters,
        }),
        (PrimaryDark.parameters = {
          storySource: { source: "(args) => (\n  <AppLink {...args} />\n)" },
          ...PrimaryDark.parameters,
        }),
        (SecondaryDark.parameters = {
          storySource: { source: "(args) => (\n  <AppLink {...args} />\n)" },
          ...SecondaryDark.parameters,
        }),
        (RedDark.parameters = {
          storySource: { source: "(args) => (\n  <AppLink {...args} />\n)" },
          ...RedDark.parameters,
        });
      var __namedExportsOrder = [
        "Primary",
        "Secondary",
        "Red",
        "PrimaryDark",
        "SecondaryDark",
        "RedDark",
      ];
    },
    "./src/shared/ui/Button/Button.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          Primary: () => Primary,
          Clear: () => Clear,
          Outline: () => Outline,
          OutlineDark: () => OutlineDark,
          __namedExportsOrder: () => __namedExportsOrder,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./src/app/styles/index.scss");
      const shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
        );
      const app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__("./src/app/providers/ThemeProvider/index.tsx");
      const shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__("./src/shared/ui/Button/Button.tsx");
      const react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "shared/Button",
        component: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.z,
        argTypes: { backgroundColor: { control: "color" } },
      };
      const Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
          shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.z,
          { ...args },
        );
      };
      Template.displayName = "Template";
      var Primary = Template.bind({});
      Primary.args = { children: "Text" };
      var Clear = Template.bind({});
      Clear.args = {
        children: "Text",
        theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.U.CLEAR,
      };
      var Outline = Template.bind({});
      Outline.args = {
        children: "Text",
        theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.U.OUTLINE,
      };
      var OutlineDark = Template.bind({});
      (OutlineDark.args = {
        children: "Text",
        theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__.U.OUTLINE,
      }),
        (OutlineDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.Q2.DARK,
          ),
        ]),
        (Primary.parameters = {
          storySource: { source: "(args) => <Button {...args} />" },
          ...Primary.parameters,
        }),
        (Clear.parameters = {
          storySource: { source: "(args) => <Button {...args} />" },
          ...Clear.parameters,
        }),
        (Outline.parameters = {
          storySource: { source: "(args) => <Button {...args} />" },
          ...Outline.parameters,
        }),
        (OutlineDark.parameters = {
          storySource: { source: "(args) => <Button {...args} />" },
          ...OutlineDark.parameters,
        });
      var __namedExportsOrder = ["Primary", "Clear", "Outline", "OutlineDark"];
    },
    "./src/widgets/ErrorPage/ui/ErrorPage.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ErrorPage_stories,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./src/app/styles/index.scss");
      const ThemeDecorator = __webpack_require__(
        "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
      );
      const ThemeProvider = __webpack_require__(
        "./src/app/providers/ThemeProvider/index.tsx",
      );
      const classNames = __webpack_require__(
        "./src/shared/lib/classNames/classNames.ts",
      );
      const useTranslation = __webpack_require__(
        "./node_modules/react-i18next/dist/es/useTranslation.js",
      );
      const Button = __webpack_require__("./src/shared/ui/Button/Button.tsx");
      const injectStylesIntoStyleTag = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
      );
      const injectStylesIntoStyleTag_default = __webpack_require__.n(
        injectStylesIntoStyleTag,
      );
      const styleDomAPI = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
      );
      const styleDomAPI_default = __webpack_require__.n(styleDomAPI);
      const insertBySelector = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertBySelector.js",
      );
      const insertBySelector_default = __webpack_require__.n(insertBySelector);
      const setAttributesWithoutAttributes = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
      );
      const setAttributesWithoutAttributes_default = __webpack_require__.n(
        setAttributesWithoutAttributes,
      );
      const insertStyleElement = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
      );
      const insertStyleElement_default =
        __webpack_require__.n(insertStyleElement);
      const styleTagTransform = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
      );
      const styleTagTransform_default =
        __webpack_require__.n(styleTagTransform);
      const ErrorPage_module = __webpack_require__(
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ErrorPage/ui/ErrorPage.module.scss",
      );
      const options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(ErrorPage_module.Z, options);
      const ui_ErrorPage_module =
        ErrorPage_module.Z && ErrorPage_module.Z.locals
          ? ErrorPage_module.Z.locals
          : void 0;
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const ErrorPage = function ErrorPage(_ref) {
        const { className } = _ref;
        const { t } = (0, useTranslation.$)();
        return (0, jsx_runtime.jsxs)("div", {
          className: (0, classNames.A)(ui_ErrorPage_module.ErrorPage, {}, [
            className,
          ]),
          children: [
            (0, jsx_runtime.jsx)("p", {
              children: t("Произошла непредвиденная ошибка"),
            }),
            (0, jsx_runtime.jsx)(Button.z, {
              onClick: function reloadPage() {
                location.reload();
              },
              children: t("Обновить страницу"),
            }),
          ],
        });
      };
      ErrorPage.displayName = "ErrorPage";
      try {
        (ErrorPage.displayName = "ErrorPage"),
          (ErrorPage.__docgenInfo = {
            description: "",
            displayName: "ErrorPage",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/ErrorPage/ui/ErrorPage.tsx#ErrorPage"
            ] = {
              docgenInfo: ErrorPage.__docgenInfo,
              name: "ErrorPage",
              path: "src/widgets/ErrorPage/ui/ErrorPage.tsx#ErrorPage",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const ErrorPage_stories = {
        title: "widget/ErrorPage",
        component: ErrorPage,
        argTypes: { backgroundColor: { control: "color" } },
      };
      const Template = function Template(args) {
        return (0, jsx_runtime.jsx)(ErrorPage, { ...args });
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = {
          storySource: { source: "(args) => (\n  <ErrorPage {...args} />\n)" },
          ...Light.parameters,
        }),
        (Dark.parameters = {
          storySource: { source: "(args) => (\n  <ErrorPage {...args} />\n)" },
          ...Dark.parameters,
        });
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/widgets/Loader/Loader.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Loader_stories,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./src/app/styles/index.scss");
      const ThemeDecorator = __webpack_require__(
        "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
      );
      const ThemeProvider = __webpack_require__(
        "./src/app/providers/ThemeProvider/index.tsx",
      );
      const classNames = __webpack_require__(
        "./src/shared/lib/classNames/classNames.ts",
      );
      const injectStylesIntoStyleTag = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
      );
      const injectStylesIntoStyleTag_default = __webpack_require__.n(
        injectStylesIntoStyleTag,
      );
      const styleDomAPI = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
      );
      const styleDomAPI_default = __webpack_require__.n(styleDomAPI);
      const insertBySelector = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertBySelector.js",
      );
      const insertBySelector_default = __webpack_require__.n(insertBySelector);
      const setAttributesWithoutAttributes = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
      );
      const setAttributesWithoutAttributes_default = __webpack_require__.n(
        setAttributesWithoutAttributes,
      );
      const insertStyleElement = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
      );
      const insertStyleElement_default =
        __webpack_require__.n(insertStyleElement);
      const styleTagTransform = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
      );
      const styleTagTransform_default =
        __webpack_require__.n(styleTagTransform);
      const Loader = __webpack_require__(
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Loader/Loader.scss",
      );
      const options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Loader.Z, options);
      Loader.Z && Loader.Z.locals && Loader.Z.locals;
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const Loader_Loader_Loader = function Loader(_ref) {
        const { className } = _ref;
        return (0, jsx_runtime.jsxs)("div", {
          className: (0, classNames.A)("lds-ring", {}, [className]),
          children: [
            (0, jsx_runtime.jsx)("div", {}),
            (0, jsx_runtime.jsx)("div", {}),
            (0, jsx_runtime.jsx)("div", {}),
            (0, jsx_runtime.jsx)("div", {}),
          ],
        });
      };
      Loader_Loader_Loader.displayName = "Loader";
      try {
        (Loader_Loader_Loader.displayName = "Loader"),
          (Loader_Loader_Loader.__docgenInfo = {
            description: "",
            displayName: "Loader",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES["src/widgets/Loader/Loader.tsx#Loader"] = {
              docgenInfo: Loader_Loader_Loader.__docgenInfo,
              name: "Loader",
              path: "src/widgets/Loader/Loader.tsx#Loader",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Loader_stories = {
        title: "widget/Loader",
        component: Loader_Loader_Loader,
        argTypes: { backgroundColor: { control: "color" } },
      };
      const Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Loader_Loader_Loader, { ...args });
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = {
          storySource: { source: "(args) => <Loader {...args} />" },
          ...Light.parameters,
        }),
        (Dark.parameters = {
          storySource: { source: "(args) => <Loader {...args} />" },
          ...Dark.parameters,
        });
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/widgets/NavBar/ui/Navbar.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Navbar_stories,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./src/app/styles/index.scss");
      const ThemeDecorator = __webpack_require__(
        "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
      );
      const ThemeProvider = __webpack_require__(
        "./src/app/providers/ThemeProvider/index.tsx",
      );
      const AppLink = __webpack_require__(
        "./src/shared/ui/AppLink/AppLink.tsx",
      );
      const classNames = __webpack_require__(
        "./src/shared/lib/classNames/classNames.ts",
      );
      const useTranslation = __webpack_require__(
        "./node_modules/react-i18next/dist/es/useTranslation.js",
      );
      const injectStylesIntoStyleTag = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
      );
      const injectStylesIntoStyleTag_default = __webpack_require__.n(
        injectStylesIntoStyleTag,
      );
      const styleDomAPI = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
      );
      const styleDomAPI_default = __webpack_require__.n(styleDomAPI);
      const insertBySelector = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertBySelector.js",
      );
      const insertBySelector_default = __webpack_require__.n(insertBySelector);
      const setAttributesWithoutAttributes = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
      );
      const setAttributesWithoutAttributes_default = __webpack_require__.n(
        setAttributesWithoutAttributes,
      );
      const insertStyleElement = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
      );
      const insertStyleElement_default =
        __webpack_require__.n(insertStyleElement);
      const styleTagTransform = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
      );
      const styleTagTransform_default =
        __webpack_require__.n(styleTagTransform);
      const Navbar_module = __webpack_require__(
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/NavBar/ui/Navbar.module.scss",
      );
      const options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Navbar_module.Z, options);
      const ui_Navbar_module =
        Navbar_module.Z && Navbar_module.Z.locals
          ? Navbar_module.Z.locals
          : void 0;
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const Navbar = function Navbar(_ref) {
        const { className } = _ref;
        const { t } = (0, useTranslation.$)();
        return (0, jsx_runtime.jsxs)("div", {
          className: (0, classNames.A)(ui_Navbar_module.navbar, {}, [
            className,
          ]),
          children: [
            (0, jsx_runtime.jsx)(AppLink.F, {
              theme: AppLink.u.SECONDARY,
              to: "/",
              className: ui_Navbar_module.mainLink,
              children: t("Главная"),
            }),
            (0, jsx_runtime.jsx)(AppLink.F, {
              theme: AppLink.u.SECONDARY,
              to: "/about",
              className: ui_Navbar_module.aboutLink,
              children: t("О сайте"),
            }),
          ],
        });
      };
      Navbar.displayName = "Navbar";
      try {
        (Navbar.displayName = "Navbar"),
          (Navbar.__docgenInfo = {
            description: "",
            displayName: "Navbar",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/NavBar/ui/Navbar.tsx#Navbar"
            ] = {
              docgenInfo: Navbar.__docgenInfo,
              name: "Navbar",
              path: "src/widgets/NavBar/ui/Navbar.tsx#Navbar",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Navbar_stories = {
        title: "widget/Navbar",
        component: Navbar,
        argTypes: { backgroundColor: { control: "color" } },
      };
      const Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Navbar, { ...args });
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = {
          storySource: { source: "(args) => <Navbar {...args} />" },
          ...Light.parameters,
        }),
        (Dark.parameters = {
          storySource: { source: "(args) => <Navbar {...args} />" },
          ...Dark.parameters,
        });
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Sidebar_stories,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        );
      const react = __webpack_require__("./node_modules/react/index.js");
      const ThemeDecorator = __webpack_require__(
        "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
      );
      const ThemeProvider = __webpack_require__(
        "./src/app/providers/ThemeProvider/index.tsx",
      );
      const ThemeSwitcher =
        (__webpack_require__(
          "./node_modules/core-js/modules/es.array.is-array.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.description.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.iterator.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.iterator.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.iterator.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.iterator.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.name.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js"),
        __webpack_require__(
          "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx",
        ));
      const useTranslation = __webpack_require__(
        "./node_modules/react-i18next/dist/es/useTranslation.js",
      );
      const classNames = __webpack_require__(
        "./src/shared/lib/classNames/classNames.ts",
      );
      const Button = __webpack_require__("./src/shared/ui/Button/Button.tsx");
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const LangSwitcher = function LangSwitcher(_ref) {
        const { className } = _ref;
        const _useTranslation = (0, useTranslation.$)();
        const { t } = _useTranslation;
        const { i18n } = _useTranslation;
        return (0, jsx_runtime.jsx)(Button.z, {
          theme: Button.U.CLEAR,
          onClick: function toggle() {
            i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
          },
          className: (0, classNames.A)("", {}, [className]),
          children: t("Язык"),
        });
      };
      LangSwitcher.displayName = "LangSwitcher";
      try {
        (LangSwitcher.displayName = "LangSwitcher"),
          (LangSwitcher.__docgenInfo = {
            description: "",
            displayName: "LangSwitcher",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/LangSwitcher/LangSwitcher.tsx#LangSwitcher"
            ] = {
              docgenInfo: LangSwitcher.__docgenInfo,
              name: "LangSwitcher",
              path: "src/widgets/LangSwitcher/LangSwitcher.tsx#LangSwitcher",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const injectStylesIntoStyleTag = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
      );
      const injectStylesIntoStyleTag_default = __webpack_require__.n(
        injectStylesIntoStyleTag,
      );
      const styleDomAPI = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
      );
      const styleDomAPI_default = __webpack_require__.n(styleDomAPI);
      const insertBySelector = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertBySelector.js",
      );
      const insertBySelector_default = __webpack_require__.n(insertBySelector);
      const setAttributesWithoutAttributes = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
      );
      const setAttributesWithoutAttributes_default = __webpack_require__.n(
        setAttributesWithoutAttributes,
      );
      const insertStyleElement = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
      );
      const insertStyleElement_default =
        __webpack_require__.n(insertStyleElement);
      const styleTagTransform = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
      );
      const styleTagTransform_default =
        __webpack_require__.n(styleTagTransform);
      const Sidebar_module = __webpack_require__(
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss",
      );
      const options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Sidebar_module.Z, options);
      const Sidebar_Sidebar_module =
        Sidebar_module.Z && Sidebar_module.Z.locals
          ? Sidebar_module.Z.locals
          : void 0;
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(r, l) {
            let t =
              r == null
                ? null
                : (typeof Symbol !== "undefined" && r[Symbol.iterator]) ||
                  r["@@iterator"];
            if (t != null) {
              let e;
              let n;
              let i;
              let u;
              const a = [];
              let f = !0;
              let o = !1;
              try {
                if (((i = (t = t.call(r)).next), l === 0)) {
                  if (Object(t) !== t) return;
                  f = !1;
                } else
                  for (
                    ;
                    !(f = (e = i.call(t)).done) &&
                    (a.push(e.value), a.length !== l);
                    f = !0
                  );
              } catch (r) {
                (o = !0), (n = r);
              } finally {
                try {
                  if (
                    !f &&
                    t.return != null &&
                    ((u = t.return()), Object(u) !== u)
                  )
                    return;
                } finally {
                  if (o) throw n;
                }
              }
              return a;
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            let n = Object.prototype.toString.call(o).slice(8, -1);
            n === "Object" && o.constructor && (n = o.constructor.name);
            if (n === "Map" || n === "Set") return Array.from(o);
            if (
              n === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      const Sidebar = function Sidebar(_ref) {
        let _classNames;
        const { className } = _ref;
        const { t } = (0, useTranslation.$)();
        const _useState2 = _slicedToArray((0, react.useState)(!1), 2);
        const collapsed = _useState2[0];
        const setCollapsed = _useState2[1];
        return (0, jsx_runtime.jsxs)("div", {
          "data-testid": "sidebar",
          className: (0, classNames.A)(
            Sidebar_Sidebar_module.Sidebar,
            ((_classNames = {}),
            (_classNames[Sidebar_Sidebar_module.collapsed] = collapsed),
            _classNames),
            [className],
          ),
          children: [
            (0, jsx_runtime.jsx)(Button.z, {
              "data-testid": "sidebar-toggle",
              onClick: function onToggle() {
                setCollapsed((prev) => !prev);
              },
              children: t("toggle"),
            }),
            (0, jsx_runtime.jsxs)("div", {
              className: Sidebar_Sidebar_module.switchers,
              children: [
                (0, jsx_runtime.jsx)(ThemeSwitcher.O, {}),
                (0, jsx_runtime.jsx)(LangSwitcher, {
                  className: Sidebar_Sidebar_module.lang,
                }),
              ],
            }),
          ],
        });
      };
      Sidebar.displayName = "Sidebar";
      try {
        (Sidebar.displayName = "Sidebar"),
          (Sidebar.__docgenInfo = {
            description: "",
            displayName: "Sidebar",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar"
            ] = {
              docgenInfo: Sidebar.__docgenInfo,
              name: "Sidebar",
              path: "src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Sidebar_stories = {
        title: "widget/Sidebar",
        component: Sidebar,
        argTypes: { backgroundColor: { control: "color" } },
      };
      const Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Sidebar, { ...args });
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = {
          storySource: { source: "(args) => (\n  <Sidebar {...args} />\n)" },
          ...Light.parameters,
        }),
        (Dark.parameters = {
          storySource: { source: "(args) => (\n  <Sidebar {...args} />\n)" },
          ...Dark.parameters,
        });
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          Light: () => Light,
          Dark: () => Dark,
          __namedExportsOrder: () => __namedExportsOrder,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js",
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./src/app/styles/index.scss");
      const shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx",
        );
      const app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__("./src/app/providers/ThemeProvider/index.tsx");
      const widgets_ThemeSwitcher_ui_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__("./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx");
      const react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "widget/Loader",
        component:
          widgets_ThemeSwitcher_ui_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__.O,
        argTypes: { backgroundColor: { control: "color" } },
      };
      const Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
          widgets_ThemeSwitcher_ui_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__.O,
          { ...args },
        );
      };
      Template.displayName = "Template";
      var Light = Template.bind({});
      Light.args = {};
      var Dark = Template.bind({});
      (Dark.args = {}),
        (Dark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.Q2.DARK,
          ),
        ]),
        (Light.parameters = {
          storySource: {
            source: "(args) => (\n  <ThemeSwitcher {...args} />\n)",
          },
          ...Light.parameters,
        }),
        (Dark.parameters = {
          storySource: {
            source: "(args) => (\n  <ThemeSwitcher {...args} />\n)",
          },
          ...Dark.parameters,
        });
      var __namedExportsOrder = ["Light", "Dark"];
    },
    "./src/app/providers/ThemeProvider/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Q2: () => Theme,
        Fg: () => useTheme,
      });
      __webpack_require__(
        "./node_modules/core-js/modules/es.array.is-array.js",
      ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.description.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.iterator.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.iterator.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.iterator.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.iterator.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.name.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js");
      const react = __webpack_require__("./node_modules/react/index.js");
      var Theme = (function (Theme) {
        return (Theme.LIGHT = "light"), (Theme.DARK = "dark"), Theme;
      })({});
      const ThemeContext = (0, react.createContext)({});
      const LOCAL_STORAGE_THEME_KEY = "theme";
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(r, l) {
            let t =
              r == null
                ? null
                : (typeof Symbol !== "undefined" && r[Symbol.iterator]) ||
                  r["@@iterator"];
            if (t != null) {
              let e;
              let n;
              let i;
              let u;
              const a = [];
              let f = !0;
              let o = !1;
              try {
                if (((i = (t = t.call(r)).next), l === 0)) {
                  if (Object(t) !== t) return;
                  f = !1;
                } else
                  for (
                    ;
                    !(f = (e = i.call(t)).done) &&
                    (a.push(e.value), a.length !== l);
                    f = !0
                  );
              } catch (r) {
                (o = !0), (n = r);
              } finally {
                try {
                  if (
                    !f &&
                    t.return != null &&
                    ((u = t.return()), Object(u) !== u)
                  )
                    return;
                } finally {
                  if (o) throw n;
                }
              }
              return a;
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            let n = Object.prototype.toString.call(o).slice(8, -1);
            n === "Object" && o.constructor && (n = o.constructor.name);
            if (n === "Map" || n === "Set") return Array.from(o);
            if (
              n === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      const defaultTheme =
        localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;
      const ThemeProvider_ThemeProvider = function ThemeProvider(_ref) {
        const { children } = _ref;
        const _useState2 = _slicedToArray((0, react.useState)(defaultTheme), 2);
        const theme = _useState2[0];
        const setTheme = _useState2[1];
        const defaultProps = (0, react.useMemo)(
          () => ({ theme, setTheme }),
          [theme],
        );
        return (0, jsx_runtime.jsx)(ThemeContext.Provider, {
          value: defaultProps,
          children,
        });
      };
      ThemeProvider_ThemeProvider.displayName = "ThemeProvider";
      try {
        (ThemeProvider_ThemeProvider.displayName = "ThemeProvider"),
          (ThemeProvider_ThemeProvider.__docgenInfo = {
            description: "",
            displayName: "ThemeProvider",
            props: {},
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"
            ] = {
              docgenInfo: ThemeProvider_ThemeProvider.__docgenInfo,
              name: "ThemeProvider",
              path: "src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function useTheme() {
        const _useContext = (0, react.useContext)(ThemeContext);
        const { theme } = _useContext;
        const { setTheme } = _useContext;
        return {
          theme,
          toggleTheme: function toggleTheme() {
            const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            setTheme(newTheme),
              localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
          },
        };
      }
      try {
        (ThemeProvider.displayName = "ThemeProvider"),
          (ThemeProvider.__docgenInfo = {
            description: "",
            displayName: "ThemeProvider",
            props: {},
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/providers/ThemeProvider/index.tsx#ThemeProvider"
            ] = {
              docgenInfo: ThemeProvider.__docgenInfo,
              name: "ThemeProvider",
              path: "src/app/providers/ThemeProvider/index.tsx#ThemeProvider",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { F: () => ThemeDecorator });
      __webpack_require__("./src/app/styles/index.scss");
      const react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__("./node_modules/react/jsx-runtime.js");
      var ThemeDecorator = function ThemeDecorator(theme) {
        return function (StoryComponent) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            "div",
            {
              className: `app ${theme}`,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                StoryComponent,
                {},
              ),
            },
          );
        };
      };
      try {
        (ThemeDecorator.displayName = "ThemeDecorator"),
          (ThemeDecorator.__docgenInfo = {
            description: "",
            displayName: "ThemeDecorator",
            props: {},
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"
            ] = {
              docgenInfo: ThemeDecorator.__docgenInfo,
              name: "ThemeDecorator",
              path: "src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/shared/lib/classNames/classNames.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => classNames });
      __webpack_require__("./node_modules/core-js/modules/es.array.join.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.concat.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.map.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.entries.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.is-array.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.description.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.iterator.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.iterator.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.iterator.js",
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.iterator.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.name.js",
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(r, l) {
            let t =
              r == null
                ? null
                : (typeof Symbol !== "undefined" && r[Symbol.iterator]) ||
                  r["@@iterator"];
            if (t != null) {
              let e;
              let n;
              let i;
              let u;
              const a = [];
              let f = !0;
              let o = !1;
              try {
                if (((i = (t = t.call(r)).next), l === 0)) {
                  if (Object(t) !== t) return;
                  f = !1;
                } else
                  for (
                    ;
                    !(f = (e = i.call(t)).done) &&
                    (a.push(e.value), a.length !== l);
                    f = !0
                  );
              } catch (r) {
                (o = !0), (n = r);
              } finally {
                try {
                  if (
                    !f &&
                    t.return != null &&
                    ((u = t.return()), Object(u) !== u)
                  )
                    return;
                } finally {
                  if (o) throw n;
                }
              }
              return a;
            }
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              (typeof Symbol !== "undefined" &&
                iter[Symbol.iterator] != null) ||
              iter["@@iterator"] != null
            )
              return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          let n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            n === "Object" && o.constructor && (n = o.constructor.name),
            n === "Map" || n === "Set"
              ? Array.from(o)
              : n === "Arguments" ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _arrayLikeToArray(o, minLen)
                : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function classNames(cls) {
        const mods =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return [cls]
          .concat(
            _toConsumableArray(
              (arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : []
              ).filter(Boolean),
            ),
            _toConsumableArray(
              Object.entries(mods)
                .filter((_ref) => {
                  const _ref2 = _slicedToArray(_ref, 2);
                  const value = (_ref2[0], _ref2[1]);
                  return Boolean(value);
                })
                .map((_ref3) => _slicedToArray(_ref3, 1)[0]),
            ),
          )
          .join(" ");
      }
    },
    "./src/shared/ui/AppLink/AppLink.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        F: () => AppLink,
        u: () => AppLinkTheme,
      });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js",
        );
      const classNames = __webpack_require__(
        "./src/shared/lib/classNames/classNames.ts",
      );
      const dist = __webpack_require__(
        "./node_modules/react-router-dom/dist/index.js",
      );
      const injectStylesIntoStyleTag = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
      );
      const injectStylesIntoStyleTag_default = __webpack_require__.n(
        injectStylesIntoStyleTag,
      );
      const styleDomAPI = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
      );
      const styleDomAPI_default = __webpack_require__.n(styleDomAPI);
      const insertBySelector = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertBySelector.js",
      );
      const insertBySelector_default = __webpack_require__.n(insertBySelector);
      const setAttributesWithoutAttributes = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
      );
      const setAttributesWithoutAttributes_default = __webpack_require__.n(
        setAttributesWithoutAttributes,
      );
      const insertStyleElement = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
      );
      const insertStyleElement_default =
        __webpack_require__.n(insertStyleElement);
      const styleTagTransform = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
      );
      const styleTagTransform_default =
        __webpack_require__.n(styleTagTransform);
      const AppLink_module = __webpack_require__(
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss",
      );
      const options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(AppLink_module.Z, options);
      const AppLink_AppLink_module =
        AppLink_module.Z && AppLink_module.Z.locals
          ? AppLink_module.Z.locals
          : void 0;
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const _excluded = ["to", "className", "children", "theme"];
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        let key;
        let i;
        const target = (function _objectWithoutPropertiesLoose(
          source,
          excluded,
        ) {
          if (source == null) return {};
          let key;
          let i;
          const target = {};
          const sourceKeys = Object.keys(source);
          for (i = 0; i < sourceKeys.length; i++)
            (key = sourceKeys[i]),
              excluded.indexOf(key) >= 0 || (target[key] = source[key]);
          return target;
        })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          const sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var AppLinkTheme = (function (AppLinkTheme) {
        return (
          (AppLinkTheme.PRIMARY = "primary"),
          (AppLinkTheme.SECONDARY = "secondary"),
          (AppLinkTheme.RED = "red"),
          AppLinkTheme
        );
      })({});
      var AppLink = function AppLink(props) {
        const { to } = props;
        const { className } = props;
        const { children } = props;
        const _props$theme = props.theme;
        const theme =
          void 0 === _props$theme ? AppLinkTheme.PRIMARY : _props$theme;
        const otherProps = _objectWithoutProperties(props, _excluded);
        return (0, jsx_runtime.jsx)(dist.rU, {
          to,
          className: (0, classNames.A)(AppLink_AppLink_module.AppLink, {}, [
            className,
            AppLink_AppLink_module[theme],
          ]),
          ...otherProps,
          children,
        });
      };
      AppLink.displayName = "AppLink";
      try {
        (AppLink.displayName = "AppLink"),
          (AppLink.__docgenInfo = {
            description: "",
            displayName: "AppLink",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              theme: {
                defaultValue: null,
                description: "",
                name: "theme",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"red"' },
                  ],
                },
              },
            },
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/shared/ui/AppLink/AppLink.tsx#AppLink"
            ] = {
              docgenInfo: AppLink.__docgenInfo,
              name: "AppLink",
              path: "src/shared/ui/AppLink/AppLink.tsx#AppLink",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/shared/ui/Button/Button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        z: () => Button,
        U: () => ThemeButton,
      });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js",
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js",
        );
      const classNames = __webpack_require__(
        "./src/shared/lib/classNames/classNames.ts",
      );
      const injectStylesIntoStyleTag = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
      );
      const injectStylesIntoStyleTag_default = __webpack_require__.n(
        injectStylesIntoStyleTag,
      );
      const styleDomAPI = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
      );
      const styleDomAPI_default = __webpack_require__.n(styleDomAPI);
      const insertBySelector = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertBySelector.js",
      );
      const insertBySelector_default = __webpack_require__.n(insertBySelector);
      const setAttributesWithoutAttributes = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
      );
      const setAttributesWithoutAttributes_default = __webpack_require__.n(
        setAttributesWithoutAttributes,
      );
      const insertStyleElement = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
      );
      const insertStyleElement_default =
        __webpack_require__.n(insertStyleElement);
      const styleTagTransform = __webpack_require__(
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
      );
      const styleTagTransform_default =
        __webpack_require__.n(styleTagTransform);
      const Button_module = __webpack_require__(
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss",
      );
      const options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Button_module.Z, options);
      const Button_Button_module =
        Button_module.Z && Button_module.Z.locals
          ? Button_module.Z.locals
          : void 0;
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      const _excluded = ["className", "children", "theme"];
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        let key;
        let i;
        const target = (function _objectWithoutPropertiesLoose(
          source,
          excluded,
        ) {
          if (source == null) return {};
          let key;
          let i;
          const target = {};
          const sourceKeys = Object.keys(source);
          for (i = 0; i < sourceKeys.length; i++)
            (key = sourceKeys[i]),
              excluded.indexOf(key) >= 0 || (target[key] = source[key]);
          return target;
        })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          const sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var ThemeButton = (function (ThemeButton) {
        return (
          (ThemeButton.CLEAR = "clear"),
          (ThemeButton.OUTLINE = "outline"),
          ThemeButton
        );
      })({});
      var Button = function Button(props) {
        props.className;
        const { children } = props;
        const { theme } = props;
        const otherProps = _objectWithoutProperties(props, _excluded);
        return (0, jsx_runtime.jsx)("button", {
          type: "button",
          className: (0, classNames.A)(Button_Button_module.Button, {}, [
            Button_Button_module[theme],
          ]),
          ...otherProps,
          children,
        });
      };
      Button.displayName = "Button";
      try {
        (Button.displayName = "Button"),
          (Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              theme: {
                defaultValue: null,
                description: "",
                name: "theme",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"clear"' }, { value: '"outline"' }],
                },
              },
            },
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"] =
              {
                docgenInfo: Button.__docgenInfo,
                name: "Button",
                path: "src/shared/ui/Button/Button.tsx#Button",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { O: () => ThemeSwitcher });
      let _path;
      let _path2;
      let _path3;
      const classNames = __webpack_require__(
        "./src/shared/lib/classNames/classNames.ts",
      );
      const react = __webpack_require__("./node_modules/react/index.js");
      const ThemeProvider = __webpack_require__(
        "./src/app/providers/ThemeProvider/index.tsx",
      );
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (let i = 1; i < arguments.length; i++) {
                  const source = arguments[i];
                  for (const key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      const theme_light = function SvgThemeLight(props) {
        return react.createElement(
          "svg",
          _extends(
            {
              width: 40,
              height: 41,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            props,
          ),
          _path ||
            (_path = react.createElement("path", {
              d: "M33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4Z",
              fill: "#FFC700",
            })),
          _path2 ||
            (_path2 = react.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "m18.56 6.955 2.92 1.832-1.007-3.29 2.663-2.226-3.412-.06L18.402 0l-1.144 3.25-3.451.237 2.741 2.089-.828 3.349 2.84-1.97Zm-5.878 7.506L14.97 15.9l-.789-2.581 2.072-1.715-2.683-.059-1.006-2.502-.887 2.542-2.683.177 2.15 1.635-.67 2.601 2.208-1.537Z",
              fill: "#FFC700",
            })),
          _path3 ||
            (_path3 = react.createElement("path", {
              d: "M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z",
              fill: "#FFC700",
            })),
        );
      };
      let theme_dark_path;
      let theme_dark_path2;
      function theme_dark_extends() {
        return (
          (theme_dark_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (let i = 1; i < arguments.length; i++) {
                  const source = arguments[i];
                  for (const key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          theme_dark_extends.apply(this, arguments)
        );
      }
      const theme_dark = function SvgThemeDark(props) {
        return react.createElement(
          "svg",
          theme_dark_extends(
            {
              width: 40,
              height: 41,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            props,
          ),
          theme_dark_path ||
            (theme_dark_path = react.createElement("path", {
              d: "M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z",
              fill: "#0115C6",
            })),
          theme_dark_path2 ||
            (theme_dark_path2 = react.createElement("path", {
              d: "m14.97 15.9-2.288-1.439-2.209 1.537.671-2.6-2.15-1.636 2.683-.177.887-2.542 1.006 2.502 2.683.06-2.072 1.714.79 2.58ZM21.48 8.787l-2.92-1.832-2.84 1.97.828-3.35-2.741-2.088 3.451-.236L18.402 0l1.322 3.211 3.412.06-2.663 2.226 1.006 3.29ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4ZM33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58Z",
              fill: "#0115C6",
            })),
        );
      };
      const Button = __webpack_require__("./src/shared/ui/Button/Button.tsx");
      const jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js",
      );
      var ThemeSwitcher = function ThemeSwitcher(_ref) {
        const { className } = _ref;
        const _useTheme = (0, ThemeProvider.Fg)();
        const { theme } = _useTheme;
        const { toggleTheme } = _useTheme;
        return (0, jsx_runtime.jsx)("div", {
          children: (0, jsx_runtime.jsx)(Button.z, {
            theme: Button.U.CLEAR,
            className: (0, classNames.A)("", {}, [className]),
            onClick: toggleTheme,
            children:
              theme === ThemeProvider.Q2.DARK
                ? (0, jsx_runtime.jsx)(theme_dark, {})
                : (0, jsx_runtime.jsx)(theme_light, {}),
          }),
        });
      };
      ThemeSwitcher.displayName = "ThemeSwitcher";
      try {
        (ThemeSwitcher.displayName = "ThemeSwitcher"),
          (ThemeSwitcher.__docgenInfo = {
            description: "",
            displayName: "ThemeSwitcher",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          typeof STORYBOOK_REACT_CLASSES !== "undefined" &&
            (STORYBOOK_REACT_CLASSES[
              "src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"
            ] = {
              docgenInfo: ThemeSwitcher.__docgenInfo,
              name: "ThemeSwitcher",
              path: "src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./storybook-init-framework-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js",
      );
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
        const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        )()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '*{margin:0;padding:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: consolas, "Times New Roman", serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px}:root{--bg-color: #f5f5f5;--inverted-bg-color: #0e0e75;--primary-color: #f80;--secondary-color: #6b9d74;--inverted-primary-color: green;--inverted-secondary-color: yellow}.app.dark{--bg-color: #0e0e75;--inverted-bg-color: #f5f5f5;--primary-color: green;--secondary-color: yellow;--inverted-primary-color: #f80;--inverted-secondary-color: #fff}.app{font:var(--font-m);background:var(--bg-color);color:var(--primary-color);min-height:100vh}.content-page{display:flex}.page-wrapper{flex-grow:1;padding:20px}',
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/styles/reset.scss",
              "webpack://./src/app/styles/variables/global.scss",
              "webpack://./src/app/styles/themes/normal.scss",
              "webpack://./src/app/styles/themes/dark.scss",
              "webpack://./src/app/styles/index.scss",
            ],
            names: [],
            mappings:
              "AAAA,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,6BAIE,QAAA,CACA,YAAA,CCXF,MACE,sDAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CAGA,qBAAA,CACA,sBAAA,CACA,+BAAA,CCZF,MACE,mBAAA,CACA,4BAAA,CACA,qBAAA,CACA,0BAAA,CACA,+BAAA,CACA,kCAAA,CCNF,UACE,mBAAA,CACA,4BAAA,CACA,sBAAA,CACA,yBAAA,CACA,8BAAA,CACA,gCAAA,CCDF,KACE,kBAAA,CACA,0BAAA,CACA,0BAAA,CACA,gBAAA,CAGF,cACE,YAAA,CAGF,cACE,WAAA,CACA,YAAA",
            sourcesContent: [
              "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  margin: 0;\n  font: inherit;\n}\n",
              ':root {\n  --font-family-main: consolas, "Times New Roman", serif;\n  --font-size-m: 16px;\n  --font-line-m: 24px;\n  --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\n  --font-size-l: 24px;\n  --font-line-l: 32px;\n  --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\n\n  // Size\n  --navbar-height: 50px;\n  --sidebar-width: 300px;\n  --sidebar-width-collapsed: 80px;\n}\n',
              ":root {\n  --bg-color: #f5f5f5;\n  --inverted-bg-color: #0e0e75;\n  --primary-color: #f80;\n  --secondary-color: #6b9d74;\n  --inverted-primary-color: green;\n  --inverted-secondary-color: yellow;\n}\n",
              ".app.dark {\n  --bg-color: #0e0e75;\n  --inverted-bg-color: #f5f5f5;\n  --primary-color: green;\n  --secondary-color: yellow;\n  --inverted-primary-color: #f80;\n  --inverted-secondary-color: #fff;\n}\n",
              '@import "reset";\n@import "variables/global";\n@import "themes/normal";\n@import "themes/dark";\n\n.app {\n  font: var(--font-m);\n  background: var(--bg-color);\n  color: var(--primary-color);\n  min-height: 100vh;\n}\n\n.content-page {\n  display: flex;\n}\n\n.page-wrapper {\n  flex-grow: 1;\n  padding: 20px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
        const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        )()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9{display:flex;justify-content:center;align-items:center;font:var(--font-l);height:100%}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/pages/NotFoundPage/ui/NotFoundPage.module.scss",
            ],
            names: [],
            mappings:
              "AAAA,oEACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,kBAAA,CACA,WAAA",
            sourcesContent: [
              ".NotFoundPage {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font: var(--font-l);\n  height: 100%;\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            NotFoundPage:
              "src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
        const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        )()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__primary--lPwbq{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__secondary--E8eho{color:var(--inverted-primary-color)}.src-shared-ui-AppLink-AppLink-module__red--ENIPJ{color:red}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/shared/ui/AppLink/AppLink.module.scss"],
            names: [],
            mappings:
              "AAAA,sDACE,0BAAA,CAGF,sDACE,0BAAA,CAGF,wDACE,mCAAA,CAGF,kDACE,SAAA",
            sourcesContent: [
              ".AppLink {\n  color: var(--primary-color);\n}\n\n.primary {\n  color: var(--primary-color);\n}\n\n.secondary {\n  color: var(--inverted-primary-color);\n}\n\n.red {\n  color: red;\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            AppLink: "src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW",
            primary: "src-shared-ui-AppLink-AppLink-module__primary--lPwbq",
            secondary: "src-shared-ui-AppLink-AppLink-module__secondary--E8eho",
            red: "src-shared-ui-AppLink-AppLink-module__red--ENIPJ",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
        const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        )()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--primary-color)}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;border:none;background:none;outline:none}.src-shared-ui-Button-Button-module__outline--pxBl_{padding:10px 15px;border:1px solid var(--primary-color);color:var(--primary-color);background:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/shared/ui/Button/Button.module.scss"],
            names: [],
            mappings:
              "AAAA,mDACE,cAAA,CACA,0BAAA,CAGF,kDACE,SAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CAGF,oDACE,iBAAA,CACA,qCAAA,CACA,0BAAA,CACA,eAAA",
            sourcesContent: [
              ".Button {\n  cursor: pointer;\n  color: var(--primary-color);\n}\n\n.clear {\n  padding: 0;\n  border: none;\n  background: none;\n  outline: none;\n}\n\n.outline {\n  padding: 10px 15px;\n  border: 1px solid var(--primary-color);\n  color: var(--primary-color);\n  background: none;\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Button: "src-shared-ui-Button-Button-module__Button--a4nOa",
            clear: "src-shared-ui-Button-Button-module__clear--FAEtI",
            outline: "src-shared-ui-Button-Button-module__outline--pxBl_",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ErrorPage/ui/ErrorPage.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
        const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        )()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-widgets-ErrorPage-ui-ErrorPage-module__ErrorPage--df00Y{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/widgets/ErrorPage/ui/ErrorPage.module.scss",
            ],
            names: [],
            mappings:
              "AAAA,6DACE,UAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qBAAA",
            sourcesContent: [
              ".ErrorPage {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            ErrorPage:
              "src-widgets-ErrorPage-ui-ErrorPage-module__ErrorPage--df00Y",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Loader/Loader.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
        const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        )()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".lds-ring{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #fff;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--inverted-bg-color) rgba(0,0,0,0) rgba(0,0,0,0)}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/widgets/Loader/Loader.scss"],
            names: [],
            mappings:
              "AAAA,UACE,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAGF,cACE,qBAAA,CACA,aAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CACA,qBAAA,CACA,iBAAA,CACA,6DAAA,CACA,iEAAA,CAGF,2BACE,sBAAA,CAGF,2BACE,qBAAA,CAGF,2BACE,sBAAA,CAGF,oBACE,GACE,sBAAA,CAGF,KACE,wBAAA,CAAA",
            sourcesContent: [
              ".lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: var(--inverted-bg-color) transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/NavBar/ui/Navbar.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
        const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        )()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-widgets-NavBar-ui-Navbar-module__navbar--nZlTW{width:100%;height:var(--navbar-height);background:var(--primary-color);display:flex;align-items:center;padding:20px}.src-widgets-NavBar-ui-Navbar-module__links--uDkJr{margin-left:auto}.src-widgets-NavBar-ui-Navbar-module__mainLink--ZhORZ{margin-right:15px}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/widgets/NavBar/ui/Navbar.module.scss"],
            names: [],
            mappings:
              "AAAA,oDACE,UAAA,CACA,2BAAA,CACA,+BAAA,CACA,YAAA,CACA,kBAAA,CACA,YAAA,CAGF,mDACE,gBAAA,CAGF,sDACE,iBAAA",
            sourcesContent: [
              ".navbar {\n  width: 100%;\n  height: var(--navbar-height);\n  background: var(--primary-color);\n  display: flex;\n  align-items: center;\n  padding: 20px;\n}\n\n.links {\n  margin-left: auto;\n}\n\n.mainLink {\n  margin-right: 15px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            navbar: "src-widgets-NavBar-ui-Navbar-module__navbar--nZlTW",
            links: "src-widgets-NavBar-ui-Navbar-module__links--uDkJr",
            mainLink: "src-widgets-NavBar-ui-Navbar-module__mainLink--ZhORZ",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
        const ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        )()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU{position:relative;height:calc(100vh - var(--navbar-height));width:var(--sidebar-width);background:var(--inverted-bg-color);transition:.3s}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC{width:var(--sidebar-width-collapsed)}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw{display:flex;justify-content:center;position:absolute;bottom:20px;width:100%}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ{margin-left:20px}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss",
            ],
            names: [],
            mappings:
              "AAAA,+DACE,iBAAA,CACA,yCAAA,CACA,0BAAA,CACA,mCAAA,CACA,cAAA,CAGF,iEACE,oCAAA,CAGF,iEACE,YAAA,CACA,sBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CAGF,4DACE,gBAAA",
            sourcesContent: [
              ".Sidebar {\n  position: relative;\n  height: calc(100vh - var(--navbar-height));\n  width: var(--sidebar-width);\n  background: var(--inverted-bg-color);\n  transition: 0.3s;\n}\n\n.collapsed {\n  width: var(--sidebar-width-collapsed);\n}\n\n.switchers {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n}\n\n.lang {\n  margin-left: 20px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Sidebar:
              "src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU",
            collapsed:
              "src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC",
            switchers:
              "src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw",
            lang: "src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./src/app/styles/index.scss": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        );
      const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        );
      const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        );
      const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        );
      const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        );
      const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        );
      const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      const _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss",
        );
      const options = {};
      (options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default()),
        (options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default()),
        (options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          )),
        (options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default()),
        (options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
      _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,
        options,
      ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_11_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals;
    },
    "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        const map = {
          "./pages/AboutPage/ui/AboutPage.stories.tsx":
            "./src/pages/AboutPage/ui/AboutPage.stories.tsx",
          "./pages/MainPage/ui/MainPage.stories.tsx":
            "./src/pages/MainPage/ui/MainPage.stories.tsx",
          "./pages/NotFoundPage/ui/NotFoundPage.stories.tsx":
            "./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",
          "./shared/ui/AppLink/AppLink.stories.tsx":
            "./src/shared/ui/AppLink/AppLink.stories.tsx",
          "./shared/ui/Button/Button.stories.tsx":
            "./src/shared/ui/Button/Button.stories.tsx",
          "./widgets/ErrorPage/ui/ErrorPage.stories.tsx":
            "./src/widgets/ErrorPage/ui/ErrorPage.stories.tsx",
          "./widgets/Loader/Loader.stories.tsx":
            "./src/widgets/Loader/Loader.stories.tsx",
          "./widgets/NavBar/ui/Navbar.stories.tsx":
            "./src/widgets/NavBar/ui/Navbar.stories.tsx",
          "./widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":
            "./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",
          "./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":
            "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",
        };
        function webpackContext(req) {
          const id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            const e = new Error(`Cannot find module '${req}'`);
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$");
      },
    "?4f7e": () => {},
    "./generated-stories-entry.cjs": (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      (module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js",
        ).configure)(
          [
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",
            ),
          ],
          module,
          !1,
        );
    },
  },
  (__webpack_require__) => {
    const __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(
      0,
      [642],
      () => (
        __webpack_exec__(
          "./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js",
        ),
        __webpack_exec__(
          "./node_modules/@storybook/core-client/dist/esm/globals/globals.js",
        ),
        __webpack_exec__("./storybook-init-framework-entry.js"),
        __webpack_exec__(
          "./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js",
        ),
        __webpack_exec__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js",
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js",
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js",
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js",
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js",
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js",
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js",
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js",
        ),
        __webpack_exec__(
          "./config/storybook/preview.js-generated-config-entry.js",
        ),
        __webpack_exec__("./generated-stories-entry.cjs")
      ),
    );
    __webpack_require__.O();
  },
]);
