import './App.css';
import { Layout, Button, Checkbox, Form, Input, Image  } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'

const { Header, Footer, Sider, Content } = Layout;

watermark({ watermark_txt: "民教网" });
function watermark(settings) {
    //默认设置
    var defaultSettings = {
        watermark_txt: "text",
        watermark_x: 20,//水印起始位置x轴坐标
        watermark_y: 20,//水印起始位置Y轴坐标
        watermark_rows: 20,//水印行数
        watermark_cols: 20,//水印列数
        watermark_x_space: 200,//水印x轴间隔
        watermark_y_space: 50,//水印y轴间隔
        watermark_color: '#000000',//水印字体颜色
        watermark_alpha: 0.2,//水印透明度
        watermark_fontsize: '18px',//水印字体大小
        watermark_font: '方正超粗黑',//水印字体
        watermark_width: 120,//水印宽度
        watermark_height: 80,//水印长度
        watermark_angle: 15//水印倾斜度数
    };
    //采用配置项替换默认值，作用类似jquery.extend
    if (arguments.length === 1 && typeof arguments[0] === "object") {
        var src = arguments[0] || {};
        for (var key in src) {
            if (src[key] && defaultSettings[key] && src[key] === defaultSettings[key])
                continue;
            else if (src[key])
                defaultSettings[key] = src[key];
        }
    }

    var oTemp = document.createDocumentFragment();

    //获取页面最大宽度
    var page_width = Math.max(document.body.scrollWidth, document.body.clientWidth);
    //获取页面最大长度
    var page_height = Math.max(document.body.scrollHeight, document.body.clientHeight);

    //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
    if (defaultSettings.watermark_cols == 0 ||
    (parseInt(defaultSettings.watermark_x
+ defaultSettings.watermark_width * defaultSettings.watermark_cols
+ defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1))
> page_width)) {
        defaultSettings.watermark_cols =
parseInt((page_width
- defaultSettings.watermark_x
+ defaultSettings.watermark_x_space)
/ (defaultSettings.watermark_width
+ defaultSettings.watermark_x_space));
        defaultSettings.watermark_x_space =
parseInt((page_width
- defaultSettings.watermark_x
- defaultSettings.watermark_width
* defaultSettings.watermark_cols)
/ (defaultSettings.watermark_cols - 1));
    }
    //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (defaultSettings.watermark_rows == 0 ||
    (parseInt(defaultSettings.watermark_y
+ defaultSettings.watermark_height * defaultSettings.watermark_rows
+ defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1))
> page_height)) {
        defaultSettings.watermark_rows =
parseInt((defaultSettings.watermark_y_space
+ page_height - defaultSettings.watermark_y)
/ (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
        defaultSettings.watermark_y_space =
parseInt((page_height
- defaultSettings.watermark_y
- defaultSettings.watermark_height
* defaultSettings.watermark_rows)
/ (defaultSettings.watermark_rows - 1));
    }
    var x;
    var y;
    for (var i = 0; i < defaultSettings.watermark_rows; i++) {
        y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
        for (var j = 0; j < defaultSettings.watermark_cols; j++) {
            x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;

            var mask_div = document.createElement('div');
            mask_div.id = 'mask_div' + i + j;
            mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
            //设置水印div倾斜显示
            mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.visibility = "";
            mask_div.style.position = "absolute";
            mask_div.style.left = x + 'px';
            mask_div.style.top = y + 'px';
            mask_div.style.overflow = "hidden";
            mask_div.style.zIndex = "9999";
            //mask_div.style.border="solid #eee 1px";
            mask_div.style.opacity = defaultSettings.watermark_alpha;
            mask_div.style.fontSize = defaultSettings.watermark_fontsize;
            mask_div.style.fontFamily = defaultSettings.watermark_font;
            mask_div.style.color = defaultSettings.watermark_color;
            mask_div.style.textAlign = "center";
            mask_div.style.width = defaultSettings.watermark_width + 'px';
            mask_div.style.height = defaultSettings.watermark_height + 'px';
            mask_div.style.display = "block";
            oTemp.appendChild(mask_div);
        };
    };
    document.body.appendChild(oTemp);
}

const label = ["姓名","性别","出生日期","民族","证件号码","学校名称","层次","专业","学制", "学历类别","学习形式","分院","系所","班级","学号","入学日期","离校日期","学籍状态"]
const val = ["吕方胜","男","1997年11月29日","汉族","141002199711290039","山西信息职业技术学院","专科","网络管理","3年","普通","普通全日制","直属","计算机系","13造价大一","031330410","2013年9月16日","2016年07月01日","不在籍（毕业）"]
function App() {
  return (
    <div id='new_app'>
      <Layout>
        <Header style={{background:'#fff'}}></Header>
        <Layout>
          <Sider style={{"background": "#fff", }}>
            <div style={{ width: '100%', height: "100%"}}>
              <div style={{display: 'flex', width:"100%", height: "50%", alignItems:'center', justifyContent:'center'}}>
                <div>
                  <img style={{width:"80px", height: '100px'}} src='./1.jpg'/>
                  <div style={{width:'100%', display: 'flex', alignItems:'center', justifyContent:'center'}}>录取照片</div>
                </div>
              </div>
              <div style={{display: 'flex', width:"100%", height: "50%", alignItems:'center', justifyContent:'center'}}>
                <div>
                  <img style={{width:"80px", height: '100px'}} src="D:/新建文件夹/test/lfs-demo/src/1.jpg"/>
                  <div style={{width:'100%', display: 'flex', alignItems:'center', justifyContent:'center'}}>学历照片</div>
                </div>
              </div>
            </div>
          </Sider>
          <Content style={{borderLeft: "1px solid #ccc", background: "#fff"}}>
            {/* <table>
              {
                label.map((key, index)=>{
                  return <tr style={{display: 'flex'}}>
                    <td>{key}</td>
                    <td>{val[index]}</td>
                  </tr>
                })
              }
            </table> */}
            <Form name="horizontal_login" layout="inline"   
              labelAlign = "right"
            >
              
              {
                label.map((key, index)=>{
                  return <Form.Item
                  style={{width: '35%'}}
                  label={<div style={{color:"rgba()"}}>{key}</div>}
                  labelCol = {{span: 13, offset: 30 , color:"red", style: {height: '50px'}}}
                >
                  <span >{val[index]}</span>
                </Form.Item>
                })
              }
            </Form>
          </Content>
        </Layout>
        <Footer style={{background: "#fff"}}></Footer>
      </Layout>
    </div>
  );
}

export default App;
