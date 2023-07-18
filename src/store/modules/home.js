import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    //   getHomeGoodPriceData().then((res) => {
    //     dispatch(changeGoodPriceInfoAction(res));
    //   });
  }
)
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    navInfo: [
      { title: 'Model S' },
      { title: 'Model 3' },
      { title: 'Model X' },
      { title: 'Model Y' },
      { title: 'Cybertruck' },
      { title: 'Powerwall' }
    ],
    homeInfo: [
      {
        type: 'video',
        title: '体验 Tesla',
        subtitle: '即刻预约试驾',
        resource:
          'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4',
        btn: [
          {
            title: '预约试驾'
          }
        ]
      },
      {
        type: 'picture',
        title: 'Model3',
        subtitle: '预约试驾',
        resource:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-3-Hero-Desktop-CN',
        btn: [
          {
            title: '定制我的Model3'
          },
          {
            title: '了解Model3'
          }
        ]
      },
      {
        type: 'picture',
        title: 'ModelY',
        subtitle: '预约试驾',
        resource:
          'https://digitalassets.tesla.cn/tesla-contents/image/upload/f_auto,q_auto:best/Homepage-Model-Y-Hero-Desktop-CN',
        btn: [
          {
            title: '定制我的ModelY'
          },
          {
            title: '了解ModelY'
          }
        ]
      },
      {
        type: 'picture',
        title: 'ModelS',
        subtitle: '预约试驾',
        resource:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop',
        btn: [
          {
            title: '定制我的ModelS'
          },
          {
            title: '了解ModelS'
          }
        ]
      },
      {
        type: 'picture',
        title: 'ModelX',
        subtitle: '预约试驾',
        resource:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD',
        btn: [
          {
            title: '定制我的ModelX'
          },
          {
            title: '了解ModelX'
          }
        ]
      },
      {
        type: 'picture',
        title: '太阳能设备和 Powerwall',
        subtitle: '全方位能源供应',
        resource:
          'https://digitalassets.tesla.cn/tesla-contents/image/upload/f_auto,q_auto:best/Desktop_SolarPanels',
        btn: [
          {
            title: '了解更多'
          }
        ]
      },
      {
        type: 'picture',
        title: '充电产品和精品配件',
        subtitle: '',
        resource:
          'https://digitalassets.tesla.cn/tesla-contents/image/upload/f_auto,q_auto:best/Desktop_Accessories',
        btn: [
          {
            title: '立即购买'
          }
        ]
      }
    ]
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})
export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer
