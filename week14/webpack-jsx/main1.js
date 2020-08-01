
import { create } from './create'
import{ Carousel } from './component/Carousel'
import { Panel } from './component/Panel'
import { TabPanel } from './component/TabPanel'
import { ListView } from './component/ListView'

/*let component = <div id="a" cls="b" style="width:100px;height:100px;background-color:lightgreen">
      <div></div>
      <p></p>
      <div></div>
      <div></div>
  </div>*/

let component = <Carousel
data={[
  "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
  "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
  "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
  "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]}
></Carousel>

let pannl = <Panel
title={'my panel'}
>
  <span>this is content1</span>
  <span>this is content2</span>
  <span>this is content3</span>
  <span>this is content4</span>
</Panel>

let tabPannl = <TabPanel
title={'my panel'}
>
  <span title="t1">this is content1</span>
  <span title="t2">this is content2</span>
  <span title="t3">this is content3</span>
  <span title="t4">this is content4</span>
</TabPanel>

let data=[
  {title: '1-蓝猫', url: "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg"},
  {title: '2-橘猫加白', url: "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg"},
  {title: '3-狸花猫', url: "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg"},
  {title: '4-橘猫', url: "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"}
]
  
let listView = <ListView
  data={data}
  >
    {record => (
      <figure>
        <img src={record.url} />
        <figcaption>{record.title}</figcaption>
      </figure>
    )}
  </ListView>

component.mountTo(document.body);
// pannl.mountTo(document.body);
// tabPannl.mountTo(document.body);
// listView.mountTo(document.body);


//componet.setAttribute("id", "a");