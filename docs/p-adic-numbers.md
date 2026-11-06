# p 진수

# 개요

**p 진수(p-adic number)** 는 유리수를 $p$ 진 절댓값에 대해 [완비화](completeness.md)한 체 $\mathbb Q_p$ 의 원소다. 방정식 $x^2=-7$ 의 해를 법 $8$, 법 $16$, 법 $32$ 로 차례로 구하면 각 단계의 해가 앞 단계의 해에 이진 자리 하나를 덧붙인 꼴로 이어진다. 이렇게 끝없이 이어지는 자릿수 전체를 하나의 수로 보면 덧셈과 곱셈을 할 수 있다. p 진수는 법 $p,p^2,p^3,\dots$ 의 해를 이어 붙인 것을 수로 삼아, 무한히 많은 합동식을 한 체의 방정식 하나로 다룬다.

# 직관

$x^2=-7$ 은 유리수 해가 없다. 그래도 [정수의 합동](modular-arithmetic.md)으로는 풀린다. $11^2=121=8\cdot 16-7$ 이므로 법 $16$ 에서 $x=11$ 이 해이고, $121+7=128=2^7$ 이므로 $11$ 은 법 $32$, $64$, $128$ 에서도 해다. 법 $256$ 에서는 $11$ 이 해가 아니고, $75^2=5625=22\cdot 256-7$ 이므로 $75$ 가 해다.

$75$ 를 $64$ 로 나눈 나머지는 $11$ 이다. 그래서 $2$ 진법으로 쓴 $11=0001011$ 과 $75=1001011$ 은 아래 여섯 자리가 같다. 법을 $2^n$ 으로 올릴 때마다 해를 앞의 해와 아래 자리가 같도록 고를 수 있고, 그러면 자리가 하나씩 위로 붙는다. 자리가 끝없이 붙은 $\cdots 1001011$ 을 수 하나로 보면, 그 수의 제곱은 모든 $n$ 에 대해 법 $2^n$ 으로 $-7$ 과 같다.

[실수](real-numbers.md)로는 해의 열 $11, 11, 11, 11, 75,\dots$ 가 커지기만 하고 수렴하지 않는다. 그런데 이웃한 두 해의 차는 $2$ 의 높은 거듭제곱으로 나누어떨어진다. $2$ 로 많이 나누어지는 수를 작다고 보는 거리를 쓰면 이 열은 이웃한 항의 거리가 $0$ 으로 가는 열이 된다. 이 거리로 $\mathbb Q$ 를 완비화한 체가 $\mathbb Q_2$ 이고, 해들의 극한이 $\mathbb Q_2$ 에서 $x^2=-7$ 의 해다.

# 정의

## 절댓값과 부치

체 $K$ 위의 **절댓값(absolute value)** 은 $|\cdot|\colon K\to\mathbb R_{\ge0}$ 으로 $|x|=0\iff x=0$ , $|xy|=|x||y|$ , $|x+y|\le|x|+|y|$ 를 만족하는 것이다. $|x+y|\le\max(|x|,|y|)$ 까지 성립하면 **비아르키메데스(non-archimedean)** 절댓값이라 하고, 이 부등식을 초거리 부등식(ultrametric inequality)이라 한다.

$\mathbb Q$ 에서 소수 $p$ 를 고정하고 **$p$ 진 부치(p-adic valuation)** 를 정의한다.

$$
v_p(x)=\max\lbrace n:p^n\mid x\rbrace\ \ (x\in\mathbb Z\setminus\lbrace 0\rbrace),\qquad
v_p\Big(\frac ab\Big)=v_p(a)-v_p(b),\qquad v_p(0)=\infty
$$

$|x|\_p=p^{-v_p(x)}$ 로 둔다. $x=p^n\cdot\frac ab$ 이고 $a,b$ 가 $p$ 와 서로소면 $|x|\_p=p^{-n}$ 이다. 직관 절의 예에서 $v_2(11^2+7)=v_2(128)=7$ 이므로 $|11^2-(-7)|\_2=2^{-7}$ 이고, $v_2(75-11)=v_2(64)=6$ 이므로 두 해의 거리는 $2^{-6}$ 이다.

절댓값의 동치류를 **자리(place)** 라 하고 $v$ 로 쓴다. $|\cdot|\_p$ 의 자리를 $p$ 로, 보통의 절댓값 $|\cdot|\_\infty$ 의 자리를 $\infty$ 로 쓴다.

## Qp 와 Zp

$|\cdot|\_p$ 에 대한 $\mathbb Q$ 의 [완비화](completeness.md)가 **p 진수(p-adic number)** 의 체 $\mathbb Q_p$ 다. 그 안의 **$p$ 진 정수환(ring of p-adic integers)** 은 다음이다.

$$
\mathbb Z_p=\lbrace x\in\mathbb Q_p:|x|\_p\le1\rbrace=\lbrace x:v_p(x)\ge0\rbrace
$$

$p=3$ 에서 $1,\ 1+3,\ 1+3+9,\dots$ 는 이웃한 두 항의 차가 $3^n$ 이라 $3$ 진 거리가 $3^{-n}$ 으로 $0$ 에 간다. 이 열은 $\mathbb Z_3$ 에서 $\frac1{1-3}=-\frac12$ 로 수렴한다. $1+3+\cdots+3^{n-1}=\frac{3^{n}-1}{2}$ 이므로 부분합에 $2$ 를 곱하면 $3^{n}-1\equiv-1\pmod{3^{n}}$ 이다.

## 국소체

$\mathbb Q_p$ 의 유한 확대 $K$ 를 **$p$ 진 국소체(p-adic local field)** 라 한다. $K$ 의 부치군이 $v_p$ 의 값군 $\mathbb Z$ 를 지수 $e$ 로 포함할 때 $e$ 를 분기지수(ramification index), 잉여체 확대의 차수를 $f$ 라 한다. $\mathbb Q_3(\sqrt 3)$ 은 $v(\sqrt 3)=1/2$ 이므로 $e=2$, $f=1$ 이다. $-1$ 은 법 $3$ 에서 제곱이 아니므로 $\mathbb Q_3(\sqrt{-1})$ 의 잉여체는 $\mathbb F_9$ 이고 $e=1$, $f=2$ 다.

# 성질

## Ostrowski 정리와 곱 공식

정리(Ostrowski 정리, Ostrowski's theorem). $\mathbb Q$ 위의 자명하지 않은 모든 절댓값은 $|\cdot|\_\infty$ 또는 어떤 $|\cdot|\_p$ 와 동치다.

그래서 $\mathbb Q$ 의 자리는 소수들과 무한 자리 $\infty$ 하나다. 모든 자리를 곱하면 다음이 성립하고, 이것을 곱 공식(product formula)이라 한다.

$$
\prod_v|x|\_v=1\qquad(x\in\mathbb Q^\times)
$$

$x=\pm p_1^{e_1}\cdots p_k^{e_k}$ 이면 $|x|\_{p_i}=p_i^{-e_i}$ 이고 $|x|\_\infty=p_1^{e_1}\cdots p_k^{e_k}$ 이므로 곱이 $1$ 이다. $12$ 에서는 $12\cdot\frac14\cdot\frac13=1$ 이다.

## Zp 의 구조

- 국소환(local ring)이다. 유일한 극대 아이디얼이 $p\mathbb Z_p$ 이고 잉여체가 $\mathbb Z_p/p\mathbb Z_p\cong\mathbb F_p$ 다.
- $0$ 이 아닌 모든 아이디얼이 $p^n\mathbb Z_p$ 인 [이산부값환](discrete-valuation-rings.md)이다.
- 모든 원소가 $a_i\in\lbrace 0,\dots,p-1\rbrace$ 을 써서 $x=\sum_{i\ge0}a_ip^i$ 로 유일하게 쓰인다.
- 역극한(inverse limit) $\varprojlim\mathbb Z/p^n\mathbb Z$ 와 표준적으로 동형이다.
- 콤팩트하다. $\mathbb Q_p$ 는 국소콤팩트(locally compact)이고 완전분리(totally disconnected)다.

$\mathbb Q_p=\mathbb Z_p[1/p]$ 이고 $0$ 이 아닌 모든 원소가 $n\in\mathbb Z$ 와 $u\in\mathbb Z_p^\times$ 를 써서 $x=p^nu$ 로 유일하게 쓰이므로 곱군이 분해된다.

$$
\mathbb Q_p^\times\cong p^{\mathbb Z}\times\mathbb Z_p^\times\cong\mathbb Z\times\mathbb Z_p^\times
$$

$p$ 진 전개는 실수와 반대 방향이다. 실수는 $3.14159\ldots$ 처럼 오른쪽으로 무한히 가고 $p$ 진수는 왼쪽으로 무한히 간다. $2$ 진수에서 $-1=\cdots1111$ 이고, 이것은 컴퓨터의 2 의 보수 표현과 같다.

## 급수의 수렴

$\mathbb Q_p$ 에서 급수 $\sum a_n$ 이 수렴할 필요충분조건은 $|a_n|\_p\to0$ 이다. 초거리 부등식으로 부분합의 차가 $|a_{m+1}+\cdots+a_n|\_p\le\max_{m\lt i\le n}|a_i|\_p$ 로 통제되므로 증명된다. 실수의 조화급수처럼 항이 $0$ 으로 가는데도 발산하는 급수는 없다.

## Hensel 보조정리

$f\in\mathbb Z_p\lbrack x\rbrack$ 와 $a\in\mathbb Z_p$ 가 $\vert f(a)\vert\_p\lt \vert f'(a)\vert\_p^2$ 를 만족하면 $a$ 에 가까운 근 $\alpha\in\mathbb Z_p$ 가 유일하게 있다. 이 정리가 [Hensel 보조정리](hensel-lemma.md)다. 직관 절에서 $f(x)=x^2+7$, $a=11$ 이면 $\vert f(11)\vert\_2=2^{-7}\lt\vert 22\vert\_2^2=2^{-2}$ 이므로 $\mathbb Z_2$ 의 근이 존재한다. 제곱원소 판정, Teichmüller 대표원, 불분기 확대의 구성이 이 정리를 쓴다.

근을 올리는 갱신식은 [Newton 법](newton-method.md)과 같다.

$$
a\ \longmapsto\ a-\frac{f(a)}{f'(a)}
$$

실수에서 Newton 법의 수렴은 초깃값에 달려 있지만, $p$ 진에서는 $f(a)\equiv0\pmod p$ 와 $f'(a)\not\equiv0\pmod p$ 만 확인하면 오차의 부치가 매 단계 두 배가 되어 법 $p^2,p^4,p^8$ 의 해가 차례로 나온다.

## 초거리 기하

초거리 부등식에서 다음이 따라 나온다. 모든 삼각형이 이등변이고, 공 안의 모든 점이 그 공의 중심이며, 두 공은 서로소이거나 하나가 다른 하나를 포함한다. 모든 공이 열린집합이면서 닫힌집합이므로 공간이 완전분리다.

## 국소체의 차수 공식

$p$ 진 국소체 $K$ 에서 부치는 유일하게 확장되고 다음이 성립한다.

$$
ef=[K:\mathbb Q_p]
$$

수체에서는 소수가 여러 [소 아이디얼](prime-ideals.md)로 갈라져 $\sum e_if_i=n$ 인데, 국소체에서는 소 아이디얼이 하나뿐이라 항이 하나다. 국소콤팩트 위상체는 $\mathbb R$ , $\mathbb C$ , $\mathbb Q_p$ 의 유한 확대, 양의 표수의 $\mathbb F_q((t))$ 의 유한 확대로 분류된다.

## 국소-대역 원리

$\mathbb R$ 에서는 부호만 보면 되고 $\mathbb Q_p$ 에서는 Hensel 보조정리로 유한 개의 합동식만 확인하면 되므로, 각 자리에서 방정식을 푸는 것은 쉽다.

정리(Hasse–Minkowski 정리, Hasse–Minkowski theorem). $\mathbb Q$ 위의 [이차형식](quadratic-forms.md)이 자명하지 않은 영점을 가질 필요충분조건은 모든 $\mathbb Q_v$ ($v=\infty$ 포함) 에서 자명하지 않은 영점을 갖는 것이다.

이 성질을 [Hasse 원리](hasse-principle.md)라 한다. $x^2+y^2=3z^2$ 는 $\mathbb Q_3$ 에서 자명하지 않은 해가 없으므로 정수해도 없다. 법 $3$ 에서 $x^2+y^2\equiv0$ 이려면 $x\equiv y\equiv0$ 이어야 하고, 그러면 $3$ 으로 나눠 무한강하가 된다.

차수를 올리면 성립하지 않는다. Selmer 의 예 $3x^3+4y^3+5z^3=0$ 은 모든 $\mathbb Q_v$ 에서 자명하지 않은 해를 갖지만 $\mathbb Q$ 에서는 갖지 않는다. 이 실패를 재는 것이 [Brauer 군](brauer-groups.md)이고, 그 계산에 [유체론](class-field-theory.md)을 쓴다.

## p 진 해석학

$\mathbb Q_p$ 위에서도 미적분을 하지만 규칙이 다르다.

- [멱급수](power-series.md) $\sum a_nx^n$ 의 수렴반경은 $|a_n|\_p^{1/n}$ 의 극한으로 정해지고, 경계에서의 판정이 $|a_nx^n|\_p\to0$ 하나다.
- $\exp(x)=\sum x^n/n!$ 은 $n!$ 의 부치 때문에 $|x|\_p\lt p^{-1/(p-1)}$ 에서만 수렴하고, $\log(1+x)$ 는 $|x|\_p\lt 1$ 에서 수렴한다.
- 도함수가 어디서나 $0$ 인데 상수가 아닌 함수가 있다. 공간이 완전분리라 평균값 정리가 없다.
- 국소해석적 함수, $p$ 진 [측도](measure.md), [p 진 L 함수](p-adic-l-function.md)의 이론이 있다. [Kubota–Leopoldt p 진 zeta 함수](kubota-leopoldt-zeta.md)가 [Bernoulli 수](bernoulli-numbers.md)의 합동 관계를 보간하고, Iwasawa 이론이 이 함수를 다룬다.

# 활용

## 전개와 Hensel 올리기

$6+6\cdot7+6\cdot49+\cdots=\frac6{1-7}=-1$ 이므로 $-1$ 은 $\cdots666_7$ 이다. $100=202_7$ 이라 전개가 유한하고 $2/5$ 처럼 분모가 $7$ 과 서로소인 유리수는 전개가 순환한다. 유리수인 것과 전개가 궁극적으로 순환하는 것이 동치인 것은 십진 전개에서도 같다.

## 다항식 인수분해와 정확한 선형대수

계산기 대수 시스템(computer algebra system)이 $\mathbb Z\lbrack x\rbrack$ 의 다항식을 인수분해하거나 정수 [행렬](matrices.md)의 선형계를 푸는 표준 경로가 올리기다. 법 $p$ 에서 먼저 풀고 정밀도를 올린 뒤 정수나 유리수를 복원하면 중간 계수가 폭발하지 않는다. 

## 아델

$\mathbb Q$ 의 자리 전체를 한꺼번에 다룰 때 단순한 직적은 너무 크고 직합은 너무 작으므로 제한직적을 쓴다.

$$
\mathbb A_{\mathbb Q}=\Big\lbrace(x_v)\in\mathbb R\times\prod_p\mathbb Q_p:\text{거의 모든 } p \text{ 에서 } x_v\in\mathbb Z_p\Big\rbrace
$$

이것이 [아델](adeles.md) 환(adele ring)이다. $\mathbb Q$ 가 그 안에 이산 부분군으로 들어가고 몫이 콤팩트해지며, 곱군 쪽에서 만든 이델류군(idele class group)이 유체론의 기본 대상이다. [Langlands 강령](langlands-program.md)도 아델 위에서 서술된다.

## 자리들의 대등성

$\mathbb R$ 와 $\mathbb Q_p$ 는 $\mathbb Q$ 의 완비화로서 대등하다. 곱 공식은 모든 자리를 세어야 성립한다. 수체와 함수체의 평행 관계도 자리로 서술되고, $\mathbb F_q((t))$ 가 $\mathbb Q_p$ 에 대응하는 함수체 쪽 국소체다.

# 연관 문서

## 선수지식

- [완비성](completeness.md)
- [정수의 합동](modular-arithmetic.md)

## 더 알아보기

### 국소체의 구조

- [Hensel 보조정리](hensel-lemma.md)
- [Witt 벡터](witt-vectors.md)
- [아델](adeles.md)
- [분기군](ramification-groups.md)
- [Newton 다각형](newton-polygon.md)
- [강체해석공간](rigid-analytic-spaces.md)
- [이차형식](quadratic-forms.md)
- [Hasse 원리](hasse-principle.md)

### L 함수와 타원곡선

- [Iwasawa 대수](iwasawa-algebra.md)
- [Kubota–Leopoldt p 진 zeta 함수](kubota-leopoldt-zeta.md)
- [Tate 곡선](tate-curve.md)
- [p 진 L 함수](p-adic-l-function.md)
- [과수렴 모듈러 기호](overconvergent-modular-symbols.md)
- [Chabauty 방법](chabauty-method.md)

#number_theory #analysis #field_theory
