$(function () {
    $("#dowebok").fullpage({
        keyboardScrolling: true,
        continuousVertical: true,
        anchors: ["P1", "P2", "P3", "P4", "P5"],
        menu: "#menu",
        fixedElements: ".nav",
        afterLoad: function (a, index) {
            if (index === 1) {
                $(".head-zi").animate({
                    "left": 488,
                    "opacity": 1,
                });
                $(".head-zi1").animate({
                    "right": 408,
                    "opacity": 1,
                })
                $(".head-zi2").animate({
                    "top": 400,
                    "opacity": 1,
                })
                $(".nav").addClass("nav1");
            }
            else if (index === 2) {
                $(".zhaopian li:nth-child(1)")
                    .delay(500)
                    .animate({
                        "top": 0,
                        "left": 0,
                    }, 2500)
                    .delay(300)
                    .queue(function () {
                        $(this).addClass("factive")
                            .dequeue()
                    })
                    .delay(500)
                    .queue(function () {
                        $(".wenzi p").css("marginLeft", 0)

                        $(this).dequeue()
                    })
                $(".zhaopian li:nth-child(2)").delay(500).animate({
                    "top": 0,
                    "left": 166,

                }, 2500)
                    .delay(600)
                    .queue(function () {
                        $(this).addClass("factive")
                            .dequeue()
                    })
                $(".zhaopian li:nth-child(3)").delay(500).animate({
                    "top": 0,
                    "left": 332,

                }, 2500)
                    .delay(900)
                    .queue(function () {
                        $(this).addClass("factive")
                            .dequeue()
                    })
                $(".zhaopian li:nth-child(4)").delay(500).animate({
                    "top": 150,
                    "left": 0,

                }, 2500)
                    .delay(1800)
                    .queue(function () {
                        $(this).addClass("factive")
                            .dequeue()
                    })
                $(".zhaopian li:nth-child(5)").delay(500).animate({
                    "top": 150,
                    "left": 166,

                }, 2500)
                    .delay(1500)
                    .queue(function () {
                        $(this).addClass("factive")
                            .dequeue()
                    })
                $(".zhaopian li:nth-child(6)").delay(500).animate({
                    "top": 150,
                    "left": 332,

                }, 2500)
                    .delay(1200)
                    .queue(function () {
                        $(this).addClass("factive")
                            .dequeue()

                    })

                $(".zhaopian li:nth-child(7)").delay(500).animate({
                    "top": 300,
                    "left": 0,

                }, 2500)
                    .delay(2100)
                    .queue(function () {
                        $(this).addClass("factive")
                            .dequeue()
                    })
                $(".zhaopian li:nth-child(8)").delay(500).animate({
                    "top": 300,
                    "left": 166,

                }, 2500)
                    .delay(2400)
                    .queue(function () {
                        $(this).addClass("factive")
                            .dequeue()
                    })
                $(".zhaopian li:nth-child(9)").delay(500).animate({
                    "top": 300,
                    "left": 332,

                }, 2500)
                    .delay(2700)
                    .queue(function () {
                        $(this).addClass("factive")
                            .dequeue()
                    })

            }
            else if (index === 3) {
                //第三
                $('#waterbubble1').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(25, 139, 201, 1)',
                    textColor: 'rgba(241, 235, 255, 0.8)',
                    txt: 'PS',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $('#waterbubble2').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(104, 189, 96, 1)',
                    textColor: 'rgba(232, 204, 255, 0.8)',
                    txt: 'HTML',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $('#waterbubble3').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(101, 62, 10, 1)',
                    textColor: 'rgba(220,161, 51, 0.8)',
                    txt: 'CSS',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $('#waterbubble4').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(25, 139, 201, 1)',
                    textColor: 'rgba(237, 255, 216, 0.8)',
                    txt: 'JS',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $('#waterbubble5').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(93, 157, 159, 1)',
                    textColor: 'rgba(255, 236, 114, 0.8)',
                    txt: 'JQuery',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $(".biao1")
                    .delay(500)
                    .animate({
                        "top": 300
                    }, 1500)
                    .queue(function () {
                        $('#waterbubble1').waterbubble({
                            radius: 100,
                            lineWidth: 5,
                            data: 0.8,
                            waterColor: 'rgba(25, 139, 201, 1)',
                            textColor: 'rgba(241, 235, 255, 0.8)',
                            txt: 'PS',
                            font: 'bold 30px "Microsoft YaHei"',
                            wave: true,
                            animation: true
                        })
                        $(this).dequeue()
                    }),

                    $(".biao2").delay(1000).animate({
                        "top": 300
                    }, 1500)
                        .queue(function () {
                            $('#waterbubble2').waterbubble({
                                radius: 100,
                                lineWidth: 5,
                                data: 0.9,
                                waterColor: 'rgba(104, 189, 96, 1)',
                                textColor: 'rgba(232, 204, 255, 0.8)',
                                txt: 'HTML',
                                font: 'bold 30px "Microsoft YaHei"',
                                wave: true,
                                animation: true
                            })
                            $(this).dequeue()
                        }),
                    $(".biao3").delay(1500).animate({
                        "top": 300
                    }, 1500)
                        .queue(function () {
                            $('#waterbubble3').waterbubble({
                                radius: 100,
                                lineWidth: 5,
                                data: .8,
                                waterColor: 'rgba(101, 62, 10, 1)',
                                textColor: 'rgba(220,161, 51, 0.8)',
                                txt: 'CSS',
                                font: 'bold 30px "Microsoft YaHei"',
                                wave: true,
                                animation: true
                            })
                            $(this).dequeue()
                        }),
                    $(".biao4").delay(2000).animate({
                        "top": 300
                    }, 1500)
                        .queue(function () {
                            $('#waterbubble4').waterbubble({
                                radius: 100,
                                lineWidth: 5,
                                data: .6,
                                waterColor: 'rgba(25, 139, 201, 1)',
                                textColor: 'rgba(237, 255, 216, 0.8)',
                                txt: 'JS',
                                font: 'bold 30px "Microsoft YaHei"',
                                wave: true,
                                animation: true
                            })
                            $(this).dequeue()

                        })


                $(".biao5").delay(2500).animate({
                    "top": 300
                }, 1500)
                    .queue(function(){
                        $('#waterbubble5').waterbubble({
                            radius: 100,
                            lineWidth: 5,
                            data: .4,
                            waterColor: 'rgba(93, 157, 159, 1)',
                            textColor: 'rgba(255, 236, 114, 0.8)',
                            txt: 'JQuery',
                            font: 'bold 30px "Microsoft YaHei"',
                            wave: true,
                            animation: true
                        })
                        $(this).dequeue()
                    })
            }
            else if (index === 4) {
                $(".dier h1").addClass("dierzi")
                    .animate(function () {
                        $(".dier .box div").css({
                            "boxShadow": "0 0 20px #fff"
                        })
                    })
                $(".scene ul").addClass("mactive");
            }
            else if (index === 5) {
                $(".xingqiu1").delay(500).animate({
                    "top": 0,
                    "left": 133
                })
                $(".xingqiu2").delay(500).animate({
                    "top": 0,
                    "left": 399
                })
                $(".xingqiu3").delay(500).animate({
                    "top": 0,
                    "left": 665,
                    // "transform":scale(1,1),
                })
                $(".xingqiu4").delay(500).animate({
                    "top": 0,
                    "left": 931
                })
                $(".xingqiu5").delay(500).animate({
                    "top": 0,
                    "left": 1197
                    // "transform":"scale(1,1)"
                })
                $(".diwu ul li .xinxi1").delay(2500).fadeIn(2000)
                $(".diwu ul li .xinxi2").delay(2800).fadeIn(2000)
                $(".diwu ul li .xinxi3").delay(3100).fadeIn(2000)
                $(".diwu ul li .xinxi4").delay(3400).fadeIn(2000)
                $(".diwu ul li .xinxi5").delay(3700).fadeIn(2000)

            }
        },
        onLeave: function (index) {
            if (index === 1) {
                $(".head-zi").animate({
                    "left": -166,
                });
                $(".head-zi1").animate({
                    "right": -369,
                })
                $(".head-zi2").animate({
                    "top": 200,
                    "opacity": 0,
                })
                $(".nav").addClass("nav1");
            }
            else if (index === 2) {
                $(".wenzi p").finish().css("marginLeft", -500)
                $(".zhaopian li:nth-child(1)").finish()
                    .animate({
                        "top": -100,
                        "left": 1100,
                    })
                    .removeClass("factive")
                $(".zhaopian li:nth-child(2)").finish()
                    .animate({
                        "top": 0,
                        "left": 1000,
                    })
                    .removeClass("factive")
                $(".zhaopian li:nth-child(3)").finish()
                    .animate({
                        "top": 200,
                        "left": 850,
                    })
                    .removeClass("factive")
                $(".zhaopian li:nth-child(4)").finish()
                    .animate({
                        "top": 110,
                        "left": 750,
                    })
                    .removeClass("factive")
                $(".zhaopian li:nth-child(5)").finish()
                    .animate({
                        "top": -50,
                        "left": 650,
                    })
                    .removeClass("factive")
                $(".zhaopian li:nth-child(6)").finish()
                    .animate({
                        "top": 350,
                        "left": 500,
                    })
                    .removeClass("factive")
                $(".zhaopian li:nth-child(7)").finish()
                    .animate({
                        "top": 50,
                        "left": 300,
                    })
                    .removeClass("factive")
                $(".zhaopian li:nth-child(8)").finish()
                    .animate({
                        "top": -20,
                        "left": 200,
                    })
                    .removeClass("factive")
                $(".zhaopian li:nth-child(9)").finish()
                    .animate({
                        "top": -80,
                        "left": 0,
                    })
                    .removeClass("factive")


            }
            else if (index === 3) {
                //第三
                $('#waterbubble1').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(25, 139, 201, 1)',
                    textColor: 'rgba(241, 235, 255, 0.8)',
                    txt: 'PS',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $('#waterbubble2').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(104, 189, 96, 1)',
                    textColor: 'rgba(232, 204, 255, 0.8)',
                    txt: 'HTML',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $('#waterbubble3').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(101, 62, 10, 1)',
                    textColor: 'rgba(220,161, 51, 0.8)',
                    txt: 'CSS',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $('#waterbubble4').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(25, 139, 201, 1)',
                    textColor: 'rgba(237, 255, 216, 0.8)',
                    txt: 'JS',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $('#waterbubble5').waterbubble({
                    radius: 100,
                    lineWidth: 5,
                    data: 0,
                    waterColor: 'rgba(93, 157, 159, 1)',
                    textColor: 'rgba(255, 236, 114, 0.8)',
                    txt: 'JQuery',
                    font: 'bold 30px "Microsoft YaHei"',
                    wave: true,
                    animation: true
                })
                $(".biao").css("top", 150);

            }
            else if (index === 4) {
                $(".dier h1").removeClass("dierzi")
                    .animate(function () {
                        $(".dier .box div").css({
                            "boxShadow": "none"
                        })
                    })
                $(".scene ul").removeClass("mactive");
            }
            else if (index === 5) {
                $(".xingqiu1").animate({
                    "top": -200,
                    "left": 500
                }).finish()
                $(".xingqiu2").animate({
                    "top": -400,
                    "left": 1200
                }).finish()
                $(".xingqiu3").animate({
                    "top": -300,
                    "left": 700,
                }).finish()
                $(".xingqiu4").animate({
                    "top": -200,
                    "left": 1000
                }).finish()
                $(".xingqiu5").animate({
                    "top": -100,
                    "left": 100
                }).finish()
                $(".diwu ul li .xinxi1").finish().css("display", "none"),
                    $(".diwu ul li .xinxi2").finish().css("display", "none"),
                    $(".diwu ul li .xinxi3").finish().css("display", "none"),
                    $(".diwu ul li .xinxi4").finish().css("display", "none"),
                    $(".diwu ul li .xinxi5").finish().css("display", "none")
            }

        }
    });
    $(".head-zi").animate({
        "left": 488,
        "opacity": 1,
    });
    $(".head-zi1").animate({
        "right": 408,
        "opacity": 1,
    })
    $(".head-zi2").animate({
        "top": 400,
        "opacity": 1,
    })
    $(".nav").addClass("nav1")
})




