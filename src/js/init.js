$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $("#init").click(function () {
        //获得循环的整数和余数
        var num = $("#selector").val();
        var integer = parseInt(num / 2);
        var remainder = num % 2;
        console.log(integer + " " + remainder);
        $("#tbody").html("");
        for (var i = 0; i < integer; i++) {
            $("#tbody").append("<tr class=\"white\">\n" +
                "                    <td><input class=\"whiteInput\" value=\"1\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"快车\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"01-03 19:04 周四\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"上海市\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"诺亚方舟自动化科技公司\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"上海大华虹桥假日酒店\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"5.0\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"125.75\" type=\"text\"></td>\n" +
                "                    <td></td>\n" +
                "                </tr>\n" +
                "                <tr class=\"grey\">\n" +
                "                    <td><input class=\"grayInput\" value=\"1\" type=\"text\"></td>\n" +
                "                    <td><input class=\"grayInput\" value=\"快车\" type=\"text\"></td>\n" +
                "                    <td><input class=\"grayInput\" value=\"01-03 19:04 周四\" type=\"text\"></td>\n" +
                "                    <td><input class=\"grayInput\" value=\"上海市\" type=\"text\"></td>\n" +
                "                    <td><input class=\"grayInput\" value=\"诺亚方舟自动化科技公司\" type=\"text\"></td>\n" +
                "                    <td><input class=\"grayInput\" value=\"上海大华虹桥假日酒店\" type=\"text\"></td>\n" +
                "                    <td><input class=\"grayInput\" value=\"5.0\" type=\"text\"></td>\n" +
                "                    <td><input class=\"grayInput\" value=\"125.75\" type=\"text\"></td>\n" +
                "                    <td></td>\n" +
                "                </tr>");
        }
        for (var i = 0; i < remainder; i++) {
            $("#tbody").append("<tr class=\"white\">\n" +
                "                    <td><input class=\"whiteInput\" value=\"1\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"快车\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"01-03 19:04 周四\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"上海市\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"诺亚方舟自动化科技公司\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"上海大华虹桥假日酒店\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"5.0\" type=\"text\"></td>\n" +
                "                    <td><input class=\"whiteInput\" value=\"125.75\" type=\"text\"></td>\n" +
                "                    <td></td>\n" +
                "                </tr>");
        }

    })
})