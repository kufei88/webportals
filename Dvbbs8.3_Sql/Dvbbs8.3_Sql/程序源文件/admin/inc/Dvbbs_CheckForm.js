function checkForm(fm,disableSubmitter){
 try {
    var formats = new Array( //Ԥ�����ʽ����
        "int [+-]?\\d* ����",
		"cint ^\\d+$ ������",
        "long [+-]?\\d* ����",
        "float [+-]?\\d*\\.?\\d* С��",
        "double [+-]?\\d*\\.?\\d* С��",
        "char . �ַ�",
        "Email \\w+([.]\\w+)*@\\w+([.]\\w+)+ �����ʼ���ַ",
        "Date \\d{4}-\\d{2}-\\d{2} ����(yyyy-MM-dd)",
        "Time \\d{2}:\\d{2}:\\d{2} ʱ��(HH:mm:ss)",
        "Timestamp \\d{4}-\\d{2}-\\d{2}\\s\\d{2}:\\d{2}:\\d{2} ����(HH:mm:ss)",
        "IdCard \\d{15}|\\d{17}[0-9xX] ���֤��(15λ��18λ)",
        "URL http://.* ��������ַ",
        "Chinese [^\\x00-\\xff]* ȫ����",
        "");
    for(var i = 0; i < fm.length; i++) {
        var input = fm[i];
        var tag = input.tagName;
        if(tag != 'SELECT' && tag != 'INPUT' && tag != 'TEXTAREA') continue;
        var name = input.name; name = name.replace(/^\s*|\s*$/g,''); // ʵ��trim()����
        var value = input.value;
        var title = input.title; if(title == null) title = '';
		//�Ȼ�ȡ��ʽ��
        var k = name.indexOf(" ");
        var fmt = '';
        if(k > 0) {
            fmt = name.substring(0,k);
            name = name.substring(k+1);
        } else if(name.charAt(0) == '!') {
            fmt = "!";
            name = name.substring(1);
        } else { 
            k = title.indexOf("$");
            if(k < 0) continue; 
            fmt = title.substring(k+1);
            title = title.substring(0,k);
        }
        var allowEmpty = fmt.charAt(0) != '!';
        //�ǿռ��
        if(!allowEmpty) {
            fmt = fmt.substring(1);
            if(input.type == 'radio' || input.type == 'checkbox') {
                var choices = fm[input.name];
                var choosed = false;
                if(typeof(choices.length) == 'undefined') { //ֻ��һ��ѡ��
                    choices = [choices]; //���ֻ��һ��Ԫ�ص�����
                }

                for(var j = 0; j < choices.length; j++) {
                    var choice = choices[j];
                    if(choice.checked) {
                        choosed = true;
                        break;
                    }
                }
                if(!choosed) return error(input,name,'����ѡ��һ�',title);
            } else if(value.replace(/^\s*|\s*$/g,'') == '' || parseInt(value) > 2147483647) {
                return error(input,name,'����Ϊ��ֵ�����2147483647��',title);
            }
        }
        if(fmt == '') continue; //��������ʽ����
        var desc = '';
        //���Ԥ��������
        for(var j = 0; j < formats.length; j++) {
            var format = formats[j];
            var k = format.indexOf(" ");
            if(k < 0) continue;
            var alias = format.substring(0,k);
            format = format.substring(k+1);
            if(fmt == alias) { //�ҵ���Ӧ��Ԥ��������
                k = format.indexOf(" ");
                fmt = format.substring(0,k);
                desc = format.substring(k+1);
                break;
            }
        }
        if(value != "" &&  !new RegExp("^("+fmt.replace(/\\n|\\r/g,"")+")$").test(value.replace(/\n|\r/g," ").replace(/([^\x00-\xff])/g,'$1$1')))
		{
            return error(input,name,desc != '' ? "��ʽ���ԣ�Ӧ������ "+desc
                : "������Ҫ��( "+fmt+" )��\n���ܺ��Ƿ��ַ��������ڻ򳬳��涨�ַ����ȵ�\n��ע��һ�������൱�������ַ���\n\n��ǰ�������ݳ���(�ַ���): "+checkForm$len(value),title);
        }
    }
    //ȫ�����ͨ�������سɹ���Ϣ
    if(disableSubmitter) for(var i = 0; i < fm.length; i++) {
        var input = fm[i];
        if(input.tagName=='INPUT' && (input.type=='submit' || input.type=='image')) {
            input.disabled=true;
            input.value='���Ժ�...';
        }
    }
    return true;
 } catch (e){
	 alert(e);
	 return false;
 }
    function error(input,name,msg,title) {
        var bgColor = input.style.backgroundColor;
        input.style.backgroundColor = bgColor.search(/red|#?FF0000/) < 0 ? 'red' : 'blue';
        try {
            input.focus();
            input.select();
        } catch(e) {}
        msg = "������ "+msg;
        if(title != null && title != '') msg = title+"\n\n��ϸ��ʾ��\n"+msg;
        alert(msg);
        input.style.backgroundColor = bgColor;
        return false;
    }
}
function checkForm$len(s) {
    return s.replace(/[^\x00-\xff]/g,'\0\0').length;
}