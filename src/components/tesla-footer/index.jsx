import React, { PureComponent } from 'react'

export default class index extends PureComponent {
  render() {
    return (
      <footer
        className="py-3 px-10 text-center smtop:absolute smtop:bottom-0 w-full z-40
        text-gray-600 text-xs font-medium"
        id="landing-footer"
      >
        <nav>
          <ul
            className="smtop:[&>li]:inline-block smtop:[&>li>a]:inline-block smtop:[&>li>a]:px-2 smtop:[&>li>a]:py-2
          [&>li]:mb-2 text-center text-xs smtop:[&>li]:mb-0 font-normal"
          >
            <li>
              <a href="#">Tesla © 2023</a>
            </li>
            <li>
              <a href="#">沪ICP备2021004806号-1</a>
            </li>
            <li>
              <a href="#">沪公网安备 31011502017892 号</a>
            </li>
            <li>
              <a href="#">营业执照</a>
            </li>
            <li>
              <a href="#">隐私和法律</a>
            </li>
            <li>
              <a href="#">联系我们</a>
            </li>
            <li>
              <a href="#">最新消息</a>
            </li>
          </ul>
        </nav>
      </footer>
    )
  }
}
