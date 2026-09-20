# 비표준 해석학

# 개요

비표준 해석학은 무한소를 원소로 가지는 순서체 위에서 극한과 미분을 다루는 해석학이다. $\varepsilon$ 과 $\delta$ 를 고르는 논증이 무한소를 곱하고 나누는 대수 계산으로 바뀐다.

무한소를 가진 체의 존재는 [Löwenheim–Skolem 정리](lowenheim-skolem.md)의 콤팩트성 논증에서 나온다. 그 체와 실수체가 같은 1차 문장을 만족한다는 이전 원리가 계산의 결과를 실수로 되돌린다.

# 직관

$f(x)=x^2$ 의 도함수를 Leibniz 의 방식으로 구한다. 증분 $h$ 를 주고 차분몫을 만든다.

$$
\frac{(x+h)^2-x^2}{h}=\frac{2xh+h^2}{h}=2x+h
$$

나눗셈을 하려면 $h\neq0$ 이어야 한다. 그런데 마지막에 $h$ 를 버려 $2x$ 를 얻으려면 $h$ 를 $0$ 으로 취급해야 한다. 같은 기호를 한 줄 안에서 두 가지로 쓴 것이라 이 계산은 그대로는 정당하지 않다.

$\varepsilon$ 과 $\delta$ 를 쓰는 [극한](limits.md)은 $h$ 를 버리는 대신 $h\to0$ 일 때 $2x+h$ 가 가까워지는 값을 말한다. 계산은 정당해지지만 한 줄이던 것이 정의와 부등식 몇 줄로 늘어난다.

다른 길이 있다. $h$ 를 $0$ 이 아니면서 모든 양의 실수보다 작은 수로 두면 나눗셈이 정당하고, 마지막 단계는 버리는 것이 아니라 $2x+h$ 에 가장 가까운 실수를 고르는 연산이 된다. 그 실수가 $2x$ 다. 남는 일은 그런 $h$ 를 가진 순서체가 있음을 보이는 것이다.

그런 체는 콤팩트성 정리로 만든다. 실수체에서 참인 모든 1차 문장에, 새 상수 $c$ 와 "$c$ 는 $1/n$ 보다 작고 $0$ 보다 크다"를 모든 자연수 $n$ 에 대해 더한다. 이 집합의 유한 부분집합은 $c$ 를 충분히 작은 실수로 해석해 만족되므로 전체의 모형이 있고, 그 모형의 $c$ 가 무한소다.

# 정의

## 초실수체

**초실수체** $\mathbb R^\ast$ 는 실수체 $\mathbb R$ 을 순서체로서 진부분구조로 포함하면서 $\mathbb R$ 과 같은 1차 문장을 만족하는 순서체다. 원소 $x\in\mathbb R^\ast$ 를 다음으로 나눈다.

- $\lvert x\rvert$ 가 모든 양의 실수보다 작으면 **무한소**다. $0$ 은 무한소다.
- $\lvert x\rvert$ 가 어떤 실수보다 작으면 **유한**이다.
- 유한이 아니면 **무한대**다.

두 원소의 차가 무한소이면 $x\approx y$ 로 쓴다.

## 표준부

유한한 $x\in\mathbb R^\ast$ 에 대해 $x\approx r$ 인 실수 $r$ 이 정확히 하나 있다. 이 $r$ 을 $x$ 의 **표준부**라 하고 $\mathrm{st}(x)$ 로 쓴다. 존재는 $\lbrace s\in\mathbb R:s\lt x\rbrace$ 의 상한을 잡아 얻고, 유일성은 서로 다른 두 실수의 차가 무한소가 아니라는 데서 나온다.

## 이전 원리

$\mathbb R$ 의 언어로 쓴 1차 문장 $\varphi$ 에 대해 $\mathbb R\models\varphi$ 와 $\mathbb R^\ast\models\varphi^\ast$ 가 동치다. 여기서 $\varphi^\ast$ 는 $\varphi$ 의 양화사를 $\mathbb R^\ast$ 의 원소 위로 읽은 것이다.

# 성질

## 미분

$f$ 가 실함수이고 $x$ 가 실수일 때, $0$ 이 아닌 모든 무한소 $\varepsilon$ 에 대해 다음 값이 같은 실수이면 그 값이 $f'(x)$ 다.

$$
f'(x)=\mathrm{st}\biggl(\frac{f^\ast(x+\varepsilon)-f^\ast(x)}{\varepsilon}\biggr)
$$

직관 절의 계산이 이 정의에서 그대로 성립한다. 차분몫이 $2x+\varepsilon$ 이고 $\mathrm{st}(2x+\varepsilon)=2x$ 다.

## 연속과 극한

$f$ 가 실수 $a$ 에서 연속인 것과, 모든 $x\in\mathbb R^\ast$ 에 대해 $x\approx a$ 이면 $f^\ast(x)\approx f^\ast(a)$ 인 것이 동치다. 수열 $(a_n)$ 이 $L$ 로 수렴하는 것과, 모든 무한대 자연수 $N\in\mathbb N^\ast$ 에 대해 $a_N\approx L$ 인 것이 동치다.

[균등연속](uniform-continuity.md)은 $a$ 를 실수로 제한하던 조건을 $\mathbb R^\ast$ 전체로 넓힌 것이다. 곧 모든 $x,y\in\mathbb R^\ast$ 에 대해 $x\approx y$ 이면 $f^\ast(x)\approx f^\ast(y)$ 다. 두 조건의 차이가 점의 범위 하나로 드러난다.

## 이전되지 않는 것

Archimedes 성질과 완비성은 1차 문장이 아니므로 $\mathbb R^\ast$ 로 옮겨 가지 않는다. Archimedes 성질은 자연수 전체에 대한 양화를 쓰고, 완비성은 부분집합 전체에 대한 양화를 쓴다. $\mathbb R^\ast$ 에서 무한소들의 집합은 위로 유계이면서 상한을 갖지 않는다.

이전 원리는 1차로 쓸 수 있는 명제만 오간다. 어떤 논증이 옮겨 가는지 판별하려면 그 명제가 1차인지 먼저 보아야 한다.

## 보수성

비표준 해석학으로 증명되는 표준 명제는 표준 방법으로도 증명된다[^1]. 무한소를 쓴 증명에서 새로운 정리가 나오지는 않고, 달라지는 것은 증명의 길이와 형태다.

# 활용

- 미분과 적분의 초등 교재에서 극한 정의를 무한소로 대체한다. Keisler 의 교재가 그 구성을 따른다[^2].
- Loeb 측도는 $\mathbb R^\ast$ 의 유한가법 측도에서 표준부를 취해 표준적인 측도를 만든다. 확률론에서 Brown 운동을 유한 무작위 걸음의 초곱으로 구성하는 데 쓴다.
- 가법적 조합론에서 밀도 정리의 증명을 초곱 위의 논증으로 바꾸면 $\varepsilon$ 과 $\delta$ 의 관리가 사라진다.
- [Löwenheim–Skolem 정리](lowenheim-skolem.md)가 말하는 1차 논리의 표현력 한계가 여기서는 도구가 된다. 실수체를 동형 차이까지 고정하지 못하는 성질이 무한소를 가진 모형을 준다.

[^1]: A. Robinson, *Non-standard Analysis*, North-Holland, 1966, 1장과 2장.
[^2]: H. J. Keisler, *Elementary Calculus: An Infinitesimal Approach*, 2판, Prindle, Weber and Schmidt, 1986.

# 연관 문서

## 선수지식

- [수열의 극한](limits.md)
- [Löwenheim–Skolem 정리](lowenheim-skolem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#logic #analysis #foundations
