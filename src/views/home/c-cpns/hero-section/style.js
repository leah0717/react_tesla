import styled from 'styled-components'

export const SectionV1Wrapper = styled.div`
  .show-item {
    position: relative;
    height: 100vh;
  }
  .show {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .desc {
    position: absolute;
    width: 100%;
    top: 160px;
    text-align: center;
    p.subtitle {
      padding: 6px 24px 14px;
    }
  }
  .btn-footer {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 100px;
  }
  .footer1-btn {
    display: inline-block;
    width: 210px;
    height: 26px;
    line-height: 26px;
    padding: 4px 24px;
    border: 3px solid #ccc;
  }
`
