function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ../docs/image2/male0001.png
       ../docs/image2/male0002.png
       ../docs/image2/male0003.png
        ../docs/image2/male0004.png
        ../docs/image2/male0005.png
        ../docs/image2/male0006.png
        ../docs/image2/male0007.png
        ../docs/image2/male0008.png
        ../docs/image2/male0009.png
        ../docs/image2/male0010.png
        ../docs/image2/male0011.png
        ../docs/image2/male0012.png
        ../docs/image2/male0013.png
        ../docs/image2/male0014.png
        ../docs/image2/male0015.png
          ../docs/image2/male0016.png
        ../docs/image2/male0017.png
        ../docs/image2/male0018.png
        ../docs/image2/male0019.png
        ../docs/image2/male0020.png
        ../docs/image2/male0021.png
        ../docs/image2/male0022.png
        ../docs/image2/male0023.png
        ../docs/image2/male0024.png
        ../docs/image2/male0025.png
        ../docs/image2/male0026.png
        ../docs/image2/male0027.png
        ../docs/image2/male0028.png
        ../docs/image2/male0029.png
        ../docs/image2/male0030.png
        ../docs/image2/male0031.png
        ../docs/image2/male0032.png
        ../docs/image2/male0033.png
        ../docs/image2/male0034.png
        ../docs/image2/male0035.png
        ../docs/image2/male0036.png
        ../docs/image2/male0037.png
        ../docs/image2/male0038.png
        ../docs/image2/male0039.png
        ../docs/image2/male0040.png
          ../docs/image2/male0041.png
        ../docs/image2/male0042.png
        ../docs/image2/male0043.png
        ../docs/image2/male0044.png
        ../docs/image2/male0045.png
        ../docs/image2/male0046.png
        ../docs/image2/male0047.png
        ../docs/image2/male0048.png
        ../docs/image2/male0049.png
        ../docs/image2/male0050.png
        ../docs/image2/male0051.png
        ../docs/image2/male0052.png
        ../docs/image2/male0053.png
        ../docs/image2/male0054.png
        ../docs/image2/male0055.png
        ../docs/image2/male0056.png
        ../docs/image2/male0057.png
        ../docs/image2/male0058.png
        ../docs/image2/male0059.png
        ../docs/image2/male0060.png
        ../docs/image2/male0061.png
        ../docs/image2/male0062.png
        ../docs/image2/male0063.png
        ../docs/image2/male0064.png
        ../docs/image2/male0065.png
        ../docs/image2/male0066.png
        ../docs/image2/male0067.png
        ../docs/image2/male0068.png
        ../docs/image2/male0069.png
        ../docs/image2/male0070.png
        ../docs/image2/male0071.png
        ../docs/image2/male0072.png
        ../docs/image2/male0073.png
        ../docs/image2/male0074.png
        ../docs/image2/male0075.png
        ../docs/image2/male0076.png
        ../docs/image2/male0077.png
        ../docs/image2/male0078.png
        ../docs/image2/male0079.png
        ../docs/image2/male0080.png
        ../docs/image2/male0081.png
        ../docs/image2/male0082.png
         ../docs/image2/male0083.png
         ../docs/image2/male0084.png
        ../docs/image2/male0085.png
        ../docs/image2/male0086.png
        ../docs/image2/male0087.png
        ../docs/image2/male0088.png
        ../docs/image2/male0089.png
        ../docs/image2/male0090.png
        ../docs/image2/male0091.png
        ../docs/image2/male0092.png
        ../docs/image2/male0093.png
        ../docs/image2/male0094.png
        ../docs/image2/male0095.png
        ../docs/image2/male0096.png
        ../docs/image2/male0097.png
        ../docs/image2/male0098.png
        ../docs/image2/male0099.png
        ../docs/image2/male0100.png
        ../docs/image2/male0101.png
        ../docs/image2/male0102.png
        ../docs/image2/male0103.png
        ../docs/image2/male0104.png
        ../docs/image2/male0105.png
        ../docs/image2/male0106.png
        ../docs/image2/male0107.png
        ../docs/image2/male0108.png
        ../docs/image2/male0109.png
        ../docs/image2/male0110.png
        ../docs/image2/male0111.png
        ../docs/image2/male0112.png
        ../docs/image2/male0113.png
        ../docs/image2/male0114.png
        ../docs/image2/male0115.png
        ../docs/image2/male0116.png
        ../docs/image2/male0117.png
        ../docs/image2/male0118.png
        ../docs/image2/male0119.png
        ../docs/image2/male0120.png
        ../docs/image2/male0121.png
        ../docs/image2/male0122.png
        ../docs/image2/male0123.png
        ../docs/image2/male0124.png
        ../docs/image2/male0125.png
        ../docs/image2/male0126.png
        ../docs/image2/male0127.png
        ../docs/image2/male0128.png
        ../docs/image2/male0129.png
        ../docs/image2/male0130.png
        ../docs/image2/male0131.png
        ../docs/image2/male0132.png
        ../docs/image2/male0133.png
        ../docs/image2/male0134.png
        ../docs/image2/male0135.png
        ../docs/image2/male0136.png
        ../docs/image2/male0137.png
        ../docs/image2/male0138.png
        ../docs/image2/male0139.png
        ../docs/image2/male0140.png
        ../docs/image2/male0141.png
        ../docs/image2/male0142.png
        ../docs/image2/male0143.png
        ../docs/image2/male0144.png
        ../docs/image2/male0145.png
        ../docs/image2/male0146.png
        ../docs/image2/male0147.png
        ../docs/image2/male0148.png
        ../docs/image2/male0149.png
        ../docs/image2/male0150.png
        ../docs/image2/male0151.png
        ../docs/image2/male0152.png
        ../docs/image2/male0153.png
        ../docs/image2/male0154.png
        ../docs/image2/male0155.png
        ../docs/image2/male0156.png
        ../docs/image2/male0157.png
        ../docs/image2/male0158.png
        ../docs/image2/male0159.png
        ../docs/image2/male0160.png
        ../docs/image2/male0161.png
        ../docs/image2/male0162.png
        ../docs/image2/male0163.png
        ../docs/image2/male0164.png
        ../docs/image2/male0165.png
        ../docs/image2/male0166.png
        ../docs/image2/male0167.png
        ../docs/image2/male0168.png
        ../docs/image2/male0169.png
        ../docs/image2/male0170.png
        ../docs/image2/male0171.png
        ../docs/image2/male0172.png
        ../docs/image2/male0173.png
        ../docs/image2/male0174.png
        ../docs/image2/male0175.png
        ../docs/image2/male0176.png
        ../docs/image2/male0177.png
        ../docs/image2/male0178.png
        ../docs/image2/male0179.png
        ../docs/image2/male0180.png
        ../docs/image2/male0181.png
        ../docs/image2/male0182.png
        ../docs/image2/male0183.png
        ../docs/image2/male0184.png
        ../docs/image2/male0185.png
        ../docs/image2/male0186.png
        ../docs/image2/male0187.png
        ../docs/image2/male0188.png
        ../docs/image2/male0189.png
        ../docs/image2/male0190.png
        ../docs/image2/male0191.png
        ../docs/image2/male0192.png
        ../docs/image2/male0193.png
        ../docs/image2/male0194.png
        ../docs/image2/male0195.png
        ../docs/image2/male0196.png
        ../docs/image2/male0197.png
        ../docs/image2/male0198.png
        ../docs/image2/male0199.png
        ../docs/image2/male0200.png
        ../docs/image2/male0201.png
        ../docs/image2/male0202.png
        ../docs/image2/male0203.png
        ../docs/image2/male0204.png
        ../docs/image2/male0205.png
        ../docs/image2/male0206.png
        ../docs/image2/male0207.png
        ../docs/image2/male0208.png
        ../docs/image2/male0209.png
        ../docs/image2/male0210.png
        ../docs/image2/male0211.png
        ../docs/image2/male0212.png
        ../docs/image2/male0213.png
        ../docs/image2/male0214.png
        ../docs/image2/male0215.png
        ../docs/image2/male0216.png
        ../docs/image2/male0217.png
        ../docs/image2/male0218.png
        ../docs/image2/male0219.png
        ../docs/image2/male0220.png
        ../docs/image2/male0221.png
        ../docs/image2/male0222.png
        ../docs/image2/male0223.png
        ../docs/image2/male0224.png
        ../docs/image2/male0225.png
        ../docs/image2/male0226.png
        ../docs/image2/male0227.png
        ../docs/image2/male0228.png
        ../docs/image2/male0229.png
        ../docs/image2/male0230.png
        ../docs/image2/male0231.png
        ../docs/image2/male0232.png
        ../docs/image2/male0233.png
        ../docs/image2/male0234.png
        ../docs/image2/male0235.png
        ../docs/image2/male0236.png
        ../docs/image2/male0237.png
        ../docs/image2/male0238.png
        ../docs/image2/male0239.png
        ../docs/image2/male0240.png
        ../docs/image2/male0241.png
        ../docs/image2/male0242.png
        ../docs/image2/male0243.png
        ../docs/image2/male0244.png
        ../docs/image2/male0245.png
        ../docs/image2/male0246.png
        ../docs/image2/male0247.png
        ../docs/image2/male0248.png
        ../docs/image2/male0249.png
        ../docs/image2/male0250.png
        ../docs/image2/male0251.png
        ../docs/image2/male0252.png
        ../docs/image2/male0253.png
        ../docs/image2/male0254.png
        ../docs/image2/male0255.png
        ../docs/image2/male0256.png
        ../docs/image2/male0257.png
        ../docs/image2/male0258.png
        ../docs/image2/male0259.png
        ../docs/image2/male0260.png
        ../docs/image2/male0261.png
        ../docs/image2/male0262.png
        ../docs/image2/male0263.png
        ../docs/image2/male0264.png
        ../docs/image2/male0265.png
        ../docs/image2/male0266.png
        ../docs/image2/male0267.png
        ../docs/image2/male0268.png
        ../docs/image2/male0269.png
        ../docs/image2/male0270.png
        ../docs/image2/male0271.png
        ../docs/image2/male0272.png
        ../docs/image2/male0273.png
        ../docs/image2/male0274.png
        ../docs/image2/male0275.png
        ../docs/image2/male0276.png
        ../docs/image2/male0277.png
        ../docs/image2/male0278.png
        ../docs/image2/male0279.png
        ../docs/image2/male0280.png
        ../docs/image2/male0281.png
        ../docs/image2/male0282.png
        ../docs/image2/male0283.png
        ../docs/image2/male0284.png
        ../docs/image2/male0285.png
        ../docs/image2/male0286.png
        ../docs/image2/male0287.png
        ../docs/image2/male0288.png
        ../docs/image2/male0289.png
        ../docs/image2/male0290.png
        ../docs/image2/male0291.png
        ../docs/image2/male0292.png
        ../docs/image2/male0293.png
        ../docs/image2/male0294.png
        ../docs/image2/male0295.png
        ../docs/image2/male0296.png
        ../docs/image2/male0297.png
        ../docs/image2/male0298.png
        ../docs/image2/male0299.png
        ../docs/image2/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })