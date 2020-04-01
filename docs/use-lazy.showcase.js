import { b as createElement, c as customElement, u as useState } from './chunks/eaceffd6.js';
export { r as render } from './chunks/eaceffd6.js';
import { u as useLazy } from './chunks/0e63c91b.js';

const delay = result => new Promise(resolve => setTimeout(resolve, 1000, result));

const Example1 = () => {
  const [load, setLoad] = useState(false);
  const [lazyState, LazyResult] = useLazy(() => delay(({
    children
  }) => createElement("h1", null, "Done! ", children)), load);
  return createElement("host", {
    shadowDom: true
  }, createElement("style", null, `:host{display:block;width:100%}img{width:100%}`), createElement("button", {
    onclick: () => setLoad(true)
  }, "load module?"), lazyState == "unimport" ? "✋" : lazyState == "loading" ? "⏳" : lazyState == "error" ? "😞" : createElement(LazyResult, null, "\uD83E\uDD42"));
};

customElement("use-lazy-example-1", Example1);
var useLazy_showcase = [{
  label: "Example useLazy",

  render() {
    const url = "https://via.placeholder.com/";
    return createElement("section", null, createElement("p", null, "This would be an example of useLazy, first generate the request of the I modulate the one that takes 1000 ms, to later show the lazyResult"), createElement("use-lazy-example-1", {
      src: `${url}1080x150, ${url}720x200 720px, ${url}520x300 520px, ${url}320x500 240px`
    }));
  }

}];

export default useLazy_showcase;
//# sourceMappingURL=use-lazy.showcase.js.map