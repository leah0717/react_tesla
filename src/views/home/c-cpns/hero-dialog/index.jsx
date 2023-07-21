import PropTypes from 'prop-types'
import React, { memo, useState, forwardRef, useImperativeHandle } from 'react'
import classnames from 'classnames'

import IconCancle from '@/assets/svg/icon-cancle'
import IconRight from '@/assets/svg/icon-right'
import IconLeft from '@/assets/svg/icon-left'
const HeroDialog = forwardRef((props, ref) => {
  const [showDialog, setShowDialog] = useState(false)
  const [hasLeft, setHasLeft] = useState(false)

  const moreClickHandle = (target) => {
    setHasLeft(target)
  }
  const showDialogHandle = (target) => {
    setShowDialog(target)
  }
  // 将子组件的方法暴露给 ref
  useImperativeHandle(ref, () => ({
    showDialogHandle
  }))
  return (
    <dialog
      open
      className={`transition-all block fixed h-screen bg-white z-50 text-indigo-DEFAULT text-sm p-0 ${
        showDialog
          ? 'animate-dialog-in mr-0 right-0 top-0'
          : 'top-0 mr-[-400px] right-0 duration-1000 opacity-0'
      }`}
    >
      <div className="flex flex-row-reverse items-center justify-between w-full p-5">
        <button
          className="p-2 cursor-pointer hover:bg-gray-100 hover:rounded"
          onClick={() => showDialogHandle(false)}
        >
          <IconCancle />
        </button>

        <button
          className={`${
            hasLeft ? 'flex justify-center px-2 py-1 my-1' : 'hidden'
          }`}
          onClick={() => moreClickHandle(false)}
        >
          <IconLeft />
          <span>返回</span>
        </button>
      </div>
      <section
        className="pt-1 pb-12 px-8 [&>ol>li]:mb-2 [&>ol>li]:w-[263px] [&>ol>li]:leading-6  smtop:[&>ol>li]:w-[247px]
        [&>ol>li>a]:inline-block [&>ol>li>a]:w-full [&>ol>li>a]:py-1 [&>ol>li>a]:px-2 [&>ol>li>a>span]:mx-1"
      >
        <ol className={`${hasLeft ? 'hidden' : 'visible'}`}>
          <li className="desktop:hidden">
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>Model S</span>
            </a>
          </li>
          <li className="desktop:hidden">
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>Model 3</span>
            </a>
          </li>
          <li className="desktop:hidden">
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>Model X</span>
            </a>
          </li>
          <li className="desktop:hidden">
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>Model Y</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>现车</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>认证二手车</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>车辆置换</span>
            </a>
          </li>
          <li className="desktop:hidden">
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>Powerwall</span>
            </a>
          </li>
          <li className="hidden desktop:visible">
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>Roadster</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>能源</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>金融服务</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>充电</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>工作机会</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>找到我们</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>问题解答</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>投资者关系</span>
            </a>
          </li>
          <li className="desktop:hidden">
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>在线商店</span>
            </a>
          </li>
          <li className="desktop:hidden">
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>账户</span>
            </a>
          </li>
          <li className="desktop:hidden">
            <button
              className="flex px-2 py-1 w-full items-center justify-center hover:bg-gray-100 hover:rounded transition duration-500"
              onClick={() => moreClickHandle(true)}
            >
              <span className="mx-1 flex-1 text-left">更多</span>
              <IconRight />
            </button>
          </li>
        </ol>
        <ol className={`${hasLeft ? 'visible' : 'hidden'}`}>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>Cybertruck</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>Roadster</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 hover:rounded transition duration-500"
            >
              <span>最新消息</span>
            </a>
          </li>
        </ol>
      </section>
    </dialog>
  )
})

HeroDialog.propTypes = {}

export default HeroDialog
