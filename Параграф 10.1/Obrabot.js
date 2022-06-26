// Ответ: 
/*

Разница будет видна, если управление перейдет из конструкции try..catch.

1. Использует finally для выполнения кода после try..catch

2. Ставит очистку после try..catch

function f() {
    try {
      alert('начало');
      return "result";
    } catch (e) {
      /// ...
    } finally {
      alert('очистка!');
    }
  }
  
  f(); */