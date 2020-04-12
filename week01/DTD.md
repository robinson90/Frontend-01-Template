# [SGML](https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language)

## 

# [DTD](https://en.wikipedia.org/wiki/Document_type_definition)
## is
```
 is a set of markup declarations that define a document type for an SGML-family markup language (GML, SGML, XML, HTML)

 通过元素和属性列表声明描述一类文档的结构
```
## 作用
指定文档中使用的实体和元素类型

## 位置
```
DOCTYPE can only appear after the optional XML declaration, and before the document body

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- the XHTML document body starts here-->
<html xmlns="http://www.w3.org/1999/xhtml">
 ...
</html>


<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" [
  <!-- an internal subset can be embedded here -->
]>
<!-- the XHTML document body starts here-->
<html xmlns="http://www.w3.org/1999/xhtml">
 ...
</html>


<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html [
  <!-- an internal subset can be embedded here -->
]>
<!-- the XHTML document body starts here-->
<html xmlns="http://www.w3.org/1999/xhtml">
 ...
</html>


just specifies that the document has a single top-level element， it indicates the type name of the root element

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<!-- the XHTML document body starts here-->
<html xmlns="http://www.w3.org/1999/xhtml">
 ...
</html>

```
# XML
## XML namespaces
providing uniquely named elements and attributes

* entity： 实体
```
An entity is similar to a macro. The entity declaration assigns it a value that is retained throughout the document
```
```
<!DOCTYPE sgml [
  <!ELEMENT sgml ANY>
  <!ENTITY % std       "standard SGML">
  <!ENTITY % signature " &#x2014; &author;.">
  <!ENTITY % question  "Why couldn&#x2019;t I publish my books directly in %std;?">
  <!ENTITY % author    "William Shakespeare">
]>

<sgml>&question;&signature;</sgml>

  <!ELEMENT sgml ANY>
  <!ENTITY % std       "standard SGML">
  <!ENTITY % signature " — &author;.">
  <!ENTITY % question  "Why couldn’t I publish my books directly in standard SGML?">
  <!ENTITY % author    "William Shakespeare">
]>
```