document.write("<pre>")
 
        let kp = 0 //Кількість прoбілів
        let ko = 12 //Кількість символів "o"
        for (let i = 0; i < 12; i++) {
            //Вивисти kp пробілів
            for (let j = 0; j < kp; j++) {
                document.write(' ')
            }
            //Вивеасти ko символів "о"
            for (let j = 0; j < ko; j++) {
                document.write('o')
            }
            //Перейти на новий рядок
            document.writeln()
            //Збільшуємо кількість пробілів 
            kp++
            //Зменшуємо кількість символів "o"
            ko--
        }

        document.write("</pre>")
