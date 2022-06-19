---
sidebar: auto
---

# 基础篇

## Java语言有哪些特点

1. 简单易学、有丰富的类库
2. 面向对象（Java最重要的特性，让程序耦合度更低，内聚性更高）
3. 与平台无关性（JVM是Java跨平台使用的根本）
4. 可靠安全
5. 支持多线程

## 面向对象和面向过程的区别

**面向过程**：是分析解决问题的步骤，然后用函数把这些步骤一步一步地实现，然后在使用的时候
一一调用则可。性能较高，所以单片机、嵌入式开发等一般采用面向过程开发

**面向对象**：是把构成问题的事物分解成各个对象，而建立对象的目的也不是为了完成一个个步骤，
而是为了描述某个事物在解决整个问题的过程中所发生的行为，面向对象有**封装、继承、多态**
的特性，所以易维护、易复用、易扩展，可以设计出低耦合的系统。但是从性能上说，比面向过程要低。

## 八种基本数据类型的大小，以及他们的封装类

| 基本类型    | 大小（字节） | 默认值          | 封装类       |
|---------|--------|--------------|-----------|
| byte    | 1      | (byte)0      | Byte      |
| short   | 2      | (short)0     | Short     |
| int     | 4      | 0            | Integer   |
| long    | 8      | 0L           | Long      |
| float   | 4      | 0.0f         | Float     |
| double  | 8      | 0.0d         | Double    |
| boolean | -      | false        | Boolean   |
| char    | 2      | \u0000(null) | Character |

注：

1. int是基本数据类型，Integer是int的封装类，是引用类型。int默认值是0，而Integer默认值
   是null，所以Integer能区分出0和null的情况。一旦java看到null，就知道这个引用还没有指向某
   个对象，在任何引用使用前，必须为其指定一个对象，否则会报错。

2. 基本数据类型在声明时，系统会自定给它分配空间，而引用类型声明时只是分配了引用空间，
   必须通过实例化开辟数据空间之后才可以赋值。数组对象也是一个引用对象，
   讲一个数组赋值给另一个数组时只是复制了一个引用，
   所以通过某一个数组所做的修改在另一个数组中也看得见。

3. 虽然定义了boolean这种数据类型，但是只是对他提供了非常有限的支持，
   在Java虚拟机中没有任何供boolean值专用的字节码指令，Java语言表达式所操作的boolean值，
   在编译之后都使用Java虚拟机中的int数据类型来代替，
   而boolean数组会变编码成Java虚拟机的byte数组，
   每个boolean元素占8位。这样我们可以得出boolean类型单独使用占4个字节，
   在数组中又是1个字节。使用int的原因是：对于当下32位的处理器（CPU）来说，
   一次处理数据是32位（这里不是指的32/64位系统，而是值CPU硬件层面），具有高效存取的特点。

## 标识符的命名规则

**标识符的含义**：是指在程序中，我们自己定义的内容，比如：类的名字、方法名称以及变量的名称等
等，都是标识符。

**命名规则（硬性要求）**：

- 标识符可以包含`英文字母`，`0-9的数字`，`$`以及`_`
- 标识符不能以数字开头
- 标识符不是关键字

**命名规范（非硬性要求）**：

- 类型规范：首字母大写，后面每个单词首字母大写（大驼峰式）。
- 变量名规范：首字母小写，后面每个单词首字母大写（小驼峰式）。
- 方法名规范：同变量名

## instanceof关键字作用

instanceof严格来所是Java中的一个双目运算符，用来测试一个对象是否为一个类的实例，用法为：

```java
boolean result = obj instanceof Class;
```

其中obj为一个对象，Class表示一个类或一个接口，当obj为Class的对象，或者是其直接或间接子类，
或者是其接口的实现类，结果result都返回true，否则为false。

注意：编译器会检查obj是否能转换成右边的class类型，如果不能转换则直接报错，如果不能确定类型，
则通过编译，具体看运行时定。

```java
int i = 0;
System.out.println(i instanceof Integer); //编译不通过，i必须是引用类型，不能是基本类型
System.out.println(i instanceof Object); //编译不通过
Integer integer = new Integer(1);
System.out.println(integer instanceof Integer); //true
//在JavaSE规范中对instanceof运算符的规定就是：如果obj为null，那么将返回false
System.out.println(null instanceof Object); //false
```

## Java自动装箱与拆箱

- 装箱就是自动将基本数据类型转换为包装器类型（int -> Integer）；调用方法：Integer的
  valueOf(int)方法
- 拆箱就是自动将包装器类型转换为基础数据类型（Integer -> int）；调用方法：Integer的
  intValue方法

在JavaSE5之前，如果要生成一个数值为10的Integer对象，必须这样进行：

```java
Integer i = new Integer(10);
```

而从JavaSE5开始就提供了自动装箱的特性，如果要生成一个数值为10的Integer对象，只需要
这样就可以了：

```java
Integer i = 10;
```

**面试题1：以下代码会输出什么？**

```java
public class Main {
    public static void main(String[] args) {
        Integer i1 = 100;
        Integer i2 = 100;
        Integer i3 = 200;
        Integer i4 = 200;
        
        System.out.println(i1 == i2);
        System.out.println(i3 == i4);
    }
}
```

运行结果：

```
true
false
```

为什么会出现这样的结果？输出结果表明i1和i2指向的同一个对象，而i3和i4指向的是不同的对象。
此时只需一看源码便知究竟，下面这段代码是Integer的valueOf方法的具体实现：

```java
    public static Integer valueOf(int i) {
        if (i >= IntegerCache.low && i <= IntegerCache.high)
            return IntegerCache.cache[i + (-IntegerCache.low)];
        return new Integer(i);
    }
```

其中IntegerCache类的实现为：

```java
    private static class IntegerCache {
        static final int low = -128;
        static final int high;
        static final Integer cache[];

        static {
            // high value may be configured by property
            int h = 127;
            String integerCacheHighPropValue =
                sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
            if (integerCacheHighPropValue != null) {
                try {
                    int i = parseInt(integerCacheHighPropValue);
                    i = Math.max(i, 127);
                    // Maximum array size is Integer.MAX_VALUE
                    h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
                } catch( NumberFormatException nfe) {
                    // If the property cannot be parsed into an int, ignore it.
                }
            }
            high = h;

            cache = new Integer[(high - low) + 1];
            int j = low;
            for(int k = 0; k < cache.length; k++)
                cache[k] = new Integer(j++);

            // range [-128, 127] must be interned (JLS7 5.1.7)
            assert IntegerCache.high >= 127;
        }

        private IntegerCache() {}
    }
```

从这2段代码可以看出，再通过valueOf方法创建Integer对象的时候，如果数值在[-128, 127]
之间，便返回指向IntegerCache.cache中已经存在的对象的引用；否则创建一个新的Integer对象。

上面的代码中i1和i2的数值为100，因此会直接从cache中取已经存在的对象，所以i1和i2指向的是
同一个对象，而i3和i4则是分别指向不同的对象

**面试题2：一下代码输出什么？**

```java
public class Main {
    public static void main(String[] args) {
        Double i1 = 100.0;
        Double i2 = 100.0;
        Double i3 = 200.0;
        Double i4 = 200.0;
        
        System.out.println(i1 == i2);
        System.out.println(i3 == i4);
    }
}
```

运行结果：

```
false
false
```

原因：在某个范围内的整形数值的个数是有限的，而浮点数却不是。

## 重载和重写的区别

**重写（Override）**
从字面上看，重写就是重新写一遍的意思。其实就是在子类中父类本身有的方法重新写一遍。子类继承了
父类原有的方法，但是有时子类并不想原封不动的继承父类中的某个方法，所以在方法名，参数列表，
返回类型（除过子类中方法的返回值是父类中方法返回值的子类时）都相同的情况下，对方法体进行修改
或重写，这就是重写。但要注意子类函数的访问修饰符权限不能少于父类的。

```java
public class Father {
  public static void main(String[] args) {
    Son s = new Son();
    s.sayHello();
  }
  
  public void sayHello() {
      System.out.println("Hello");
  }
}

class Son extends Father {
  @Override
  public void sayHello() {
      System.out.println("hello by ");
  }
}
```

**重写**总结：

1. 发生在父类与子类之间
2. 方法名，参数列表，返回类型（除过子类中方法的返回类型是父类中返回类型的子类）必须相同
3. 访问修饰符的限制一定要大于被重写方法的访问修饰符（public>protected>default>private）
4. 重写方法一定不能抛出新的检查异常或者比被重写方法声明更加宽泛的检查型异常

**重载（Overload）**

在一个类中，同名的方法如果有不同的参数列表（参数类型不同、参数个数不同甚至是参数顺序不同）则
视为重载。同时，重载对返回类型没有要求，可以相同也可以不同，但不能通过返回类型是否相同来判断
重载

```
public class Father {
  public static void main(String[] args) {
    Father s = new Father();
    s.sayHello();
    s.sayHello("wintershii");
  }
  
  public void sayHello() {
      System.out.println("Hello");
  }
  
  public void sayHello(String name) {
      System.out.println("Hello " + name);
  }
}
```

**重载**总结：

1. 重载Overload是一个类中多态性的一种表现
2. 重载要求同名方法的参数列表不同（参数类型，参数个数甚至是参数顺序）
3. 重载的时候，返回值类型可以相同也可以不同。无法以返回类型作为重载函数的区分标准

## equals和==的区别

**==：**

==比较的是变量（栈）内存中存放的对象的（堆）内存地址，用来判断两个对象的地址是否相同，即是
否是指相同一个对象。比较的是真正意义上的指针操作。

1. 比较的是操作符两端的操作数是否是同一个对象
2. 两边的操作数必须是同一类型的（可以是父子类之间）才能编译通过
3. 比较的是地址，如果是具体的阿拉伯数字的比较，值相等则为true，如：`int a = 10`与
   `long b = 10L`与`double c = 10.0`都是相同的（为true），因为他们都指向地址为10
   的堆

**equals：**

equals用来比较的是两个对象的内容是否相等，由于所有的类都是继承自java.lang.Object类的，
所以适用于所有对象，如果没有对该方法进行覆盖的话，调用的仍然是Object类中的方法，而Object
中的equals方法返回的却是==的判断。

**总结**
所有比较是否相等时，都是用equals并且在对常量相比较时，把常量写在前面，因为使用object中的
equals，object可能对null，则空指针

在阿里的代码规范中只使用equals，阿里插件默认会识别，并可以快速修改，推荐安装阿里插件来排查
老代码使用"=="，替换成equals

## Hashcode的作用

Java的集合有两类，一类是List，还有一类是Set。前者有序可重复，后者无序不重复。当我们在Set
中插入的时候怎么判断是否已经存在该元素呢，可以通过equals方法。但是如果元素太多，用这样的方
法就会比较慢

于是有人发明了哈希算法来提高集合中查找元素的效率。这种方式将集合分成或若干个存储区域，每个
对象可以计算出一个哈希码，可以将哈希码分组，每组分别对应某个存储区域，根据一个对象的哈希码
就可以确定该对象应该存储的那个区域。

hashcode方法可以这样理解：它返回的就是根据对象的内存地址换算出的一个值。这样一来，当集合要
添加新的元素时，先调用这个元素的hashcode方法，就一下子能定位到它应该放置的物理位置上。如果
这个位置上没有元素，它就可以直接存储在这个位置上，不用再进行任何比较了；如果这个位置上已经有
元素了，就调用它的equals方法与新元素进行比较，相同的话就不存了，不相同就散列其他的地址。
这样一来实际调用equals方法的次数就大大降低了，几乎只需要一两次。

## String、StringBuilder、StringBuffer的区别是什么？

String是只读字符串，它并不是基本数据类型，而是一个对象。从底层源码来看是一个final类型的字符
数组，所引用的字符串不能被改变，一经定义，无法再增删改。每次对String的操作都会生成新的
String对象

```java
private final char value[];
```

每次`+`操作：隐式在堆上new了一个跟原字符串相同的StringBuilder对象，再调用append方法拼接
+后面的字符。

StringBuffer和StringBuilder他们两个都继承了AbstractStringBuilder抽象类，从
AbstractStringBuilder抽象类中我们可以看到：

```java
    /**
     * The value is used for character storage.
     */
    char[] value;
```

他们的底层都是可变的字符数组，所以在进行频繁的字符操作时，建议使用StringBuilder和
StringBuffer来进行操作。另外StringBuffer对调用的方法加了同步锁，所以是线程安全的。
StringBuilder并没有对方法进行同步锁，所以是非线程安全的。

## ArrayList和LinkedList的区别

**Array（数组）是基于索引（index）的数据结构，它使用索引在数组中搜索和读取数据是很快的。**

Array获取数据的时间复杂度是O(1)，但是要删除数据却是开销很大，因为这需要重排数组中的所有数据，
因为删除数据以后，需要把后面所有的数据前移

**缺点：**数组初始化必须指定初始化的长度，否则报错

例如：

```java
int[] a = new int[4]; // 推荐使用int[]这种歌方式初始化
int c[] = {23, 43, 56, 78}; // 长度：4，索引范围：[0, 3]
```

**List是一个有序的集合，可以包含重复的元素，提供了按索引访问的方式，它继承Collection。**

**List有两个重要的实现类：ArrayList和LinkedList**

**ArrayList：**

- 可以看作是能够自动增长容量的数组
- toArray方法返回一个数组
- asList方法返回一个列表
- 底层的实现是Array数组扩容实现

**LinkedList：**

- 是一个双向链表
- 再添加和删除元素时具有比ArrayList更好的性能
- 在get和set方面弱于ArrayList

性能差异都是数据量很大或操作频繁的情况下比较明显
