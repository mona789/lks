/**
 * Created by lenovo on 2016/12/13.
 */
//����ɽ������
$(function () {
    //��ҳ����ͼ�ı�
    var timer = null;
    $(function () {
        var i = 0;
        var j = 0;
        var z = -1;
        timer = setInterval(function () {
            i++;
            $(".index-bg").css("background", "url('images/inndex-bg.png')" +
                (11.111111111111111 * i) + "%" + (j * 2 + 1) * 11.11111111111 + "%");
            if (i == 9 && j == 4) {
                //i=null;
                //j=null;
                //
                clearInterval(timer)
            }
            if (i == 9) {
                i = 0;
                j++;
            }
        }, 100)
        var zhuaPageX;
        var zhuaPageY;
        var bd;
        //    �������¼�
        $(document).mousemove(function (event) {
           var  event = event || window.event;
             zhuaPageX = event.pageX;
             zhuaPageY = event.pageY;
            //$(".zhua2").css("display","none");
            //$(".zhua").css("display","block")
            $(".zhua").css({"top": zhuaPageY, "left": zhuaPageX,"display":'block'});
            $(".zhua2").css({"top": zhuaPageY, "left": zhuaPageX,"display":'none'});
            //��ҳ��̬
//1.��ȡ���б�ǩ
//    ���ŵ����صĺ�����ߵ�ʱ��������x�᷽���ƶ�
            if (zhuaPageX<174)  {
                    //alert('789');
                    $('.lks_main').css({
                        'transform':'translateX(-700px)',
                        'transition':'all 5s'
                    })
            }else if(zhuaPageX>1170) {
                $('.lks_main').css({
                    'transform': 'translateX(0px)',
                    'transition': 'all 5s'
                })
            }

        });
        $(document).dblclick(function (event) {
            //var event=event||window.event;
            $(".zhua2").css("display","block")
            $(".zhua").css("display","none")
            console.log(1)
            //console.log('k');
        });
        console.log(zhuaPageY);

    });
//2.�����������������
    $('.self').click(function () {
        var index=$(this).index();
        console.log(index);
        $('#displaybox>div:eq('+index+')').show().siblings('div').hide();
                $('.lks_display').css('display','block');

    })
    $('.lks_close').click(function () {
        $('#displaybox').css('display','none');
    });
    $('.lks_qie').mouseenter(function () {
        console.log('һ��ȥ��')
        $('.lks_qie').css({
            'background':"url('images/qie-e83823de.png')",
                'backgroundSize':4060+'px'+2088+'px',
        }


        )
    })
});


