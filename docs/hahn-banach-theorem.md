# Hahn–Banach 정리

# 개요

Hahn–Banach 정리는 부분공간 위의 선형범함수를 크기를 키우지 않고 전체 공간으로 확장한다. [Banach 공간](banach-spaces.md) $X$ 의 부분공간 $M$ 과 연속 선형범함수 $f\in M^\ast$ 가 있으면, $M$ 에서 $f$ 와 일치하고 $\Vert F\Vert=\Vert f\Vert$ 를 만족하는 $F\in X^\ast$ 가 있다.

확장을 만드는 데 Zorn 보조정리를 쓰므로 이 정리는 [선택공리](axiom-of-choice.md)에 의존한다. 따름정리로 [쌍대 공간](dual-space.md)이 점을 분리하고, 겹치지 않는 볼록집합을 초평면으로 가를 수 있다.

# 직관

수렴하는 수열 전체의 공간 $c$ 에서 극한 $L(x)=\lim x\_n$ 은 선형이고 $\vert L(x)\vert\le\Vert x\Vert\_\infty$ 를 만족한다. 유계 수열 전체 $\ell^\infty$ 에서도 같은 부등식을 지키는 선형범함수를 쓰려고 한다. 유한차원에서 하던 대로 기저를 잡아 좌표마다 값을 정하려면 $\ell^\infty$ 의 기저를 적어야 하는데, 그런 기저를 적을 수 없다.

수열 하나만 먼저 넣는다. $x=(1,0,1,0,\dots)$ 는 $c$ 에 없다. $c$ 와 $x$ 가 생성하는 공간의 원소는 $y+tx\thinspace(y\in c,\thinspace t\in\mathbb R)$ 로 한 가지 꼴로 적히므로, $L\_1(y+tx)=L(y)+t\alpha$ 로 두면 실수 $\alpha$ 하나만 정하면 된다. 부등식 $L(y)+t\alpha\le\Vert y+tx\Vert$ 를 $t\gt 0$ 으로 나누면 $\alpha\le\Vert w+x\Vert-L(w)$ 이고, $t\lt 0$ 으로 나누면 $\alpha\ge L(z)-\Vert z-x\Vert$ 다. 두 부등식이 $\alpha$ 를 가두는 구간은 다음이다.

$$
\sup\_{z\in c}\lbrace L(z)-\Vert z-x\Vert\rbrace\thinspace\le\thinspace\alpha\thinspace\le\thinspace\inf\_{w\in c}\lbrace\Vert w+x\Vert-L(w)\rbrace
$$

이 구간은 비지 않는다. $z,w\in c$ 를 아무렇게나 잡아도 $L(z)+L(w)=L(z+w)\le\Vert z+w\Vert\le\Vert z-x\Vert+\Vert w+x\Vert$ 이므로 왼쪽 상한이 오른쪽 하한을 넘지 않는다. $z=w=0$ 을 넣으면 $-1\le\alpha\le1$ 이고, 이 구간의 값을 아무것이나 고르면 $x$ 에 값을 하나 준 확장이 생긴다.

이 계산은 어느 수열에나 그대로 쓰인다. 남은 수열마다 걸음을 되풀이하면 되는데 수열이 셀 수 없이 많아 되풀이로는 끝나지 않는다. 그래서 확장 전체를 정의역의 포함관계로 정렬하고 Zorn 보조정리로 극대인 것을 잡는다. 극대 확장의 정의역이 $\ell^\infty$ 보다 작으면 밖의 수열 하나를 골라 위 계산으로 한 차원 더 늘릴 수 있어 극대가 아니므로, 정의역은 $\ell^\infty$ 전체다.

# 정의

## 열등선형 범함수

실벡터공간 $X$ 위의 **열등선형 범함수**는 다음 둘을 만족하는 $p:X\to\mathbb R$ 다.

$$
p(x+y)\le p(x)+p(y),\qquad p(tx)=t\thinspace p(x)\thinspace(t\ge0)
$$

반노름 $p(x)=c\Vert x\Vert$ 가 열등선형이다.

## Minkowski 범함수

$0$ 을 내부점으로 갖는 [볼록](convexity.md)집합 $C\subseteq X$ 의 **Minkowski 범함수**는 다음이다.

$$
p\_C(x)=\inf\lbrace t\gt 0:x/t\in C\rbrace
$$

$p\_C$ 는 열등선형이고, $C$ 가 열린집합이면 $C=\lbrace x:p\_C(x)\lt 1\rbrace$ 다.

## 확장

부분공간 $M\subseteq X$ 위의 선형범함수 $f$ 에 대해, $X$ 위의 선형범함수 $F$ 가 모든 $x\in M$ 에서 $F(x)=f(x)$ 를 만족하면 $F$ 를 $f$ 의 **확장**이라 한다.

# 성질

## Hahn–Banach 확장 정리

$p$ 가 실벡터공간 $X$ 위의 열등선형 범함수이고, 부분공간 $M$ 위의 선형범함수 $f$ 가 $M$ 에서 $f\le p$ 를 만족하면, $X$ 전체에서 $F\le p$ 인 확장 $F$ 가 있다.

증명의 요지. $x\_0\notin M$ 을 하나 잡아 $M+\mathbb Rx\_0$ 위로 한 차원 늘린다. $F(y+tx\_0)=f(y)+t\alpha$ 가 $p$ 이하이려면 $\alpha$ 가 다음 구간에 들어야 한다.

$$
\sup\_{y\in M}\lbrace f(y)-p(y-x\_0)\rbrace\le\alpha\le\inf\_{z\in M}\lbrace p(z+x\_0)-f(z)\rbrace
$$

$f(y)+f(z)=f(y+z)\le p(y+z)\le p(y-x\_0)+p(z+x\_0)$ 이므로 이 구간은 비지 않는다. 확장 전체를 정의역의 포함관계로 정렬하면 사슬의 합집합이 다시 확장이므로 Zorn 보조정리가 극대 원소를 준다. 극대 원소의 정의역이 $X$ 가 아니면 위 한 차원 확장을 한 번 더 할 수 있다.

## 노름 보존 확장

$M$ 이 노름공간 $X$ 의 부분공간이고 $f\in M^\ast$ 이면 $\Vert F\Vert=\Vert f\Vert$ 인 확장 $F\in X^\ast$ 가 있다.

$p(x)=\Vert f\Vert\thinspace\Vert x\Vert$ 로 두면 $p$ 는 열등선형이고 $M$ 에서 $f\le p$ 다. 확장 정리가 주는 $F$ 는 $F\le p$ 를 만족하고, $-F(x)=F(-x)\le p(-x)=p(x)$ 이므로 $\vert F\vert\le p$ 다. 따라서 $\Vert F\Vert\le\Vert f\Vert$ 이고, $F$ 가 $M$ 에서 $f$ 와 일치하므로 등호다.

## 쌍대공간의 비자명성

$x\ne0$ 이면 $\Vert f\Vert=1$ 과 $f(x)=\Vert x\Vert$ 를 만족하는 $f\in X^\ast$ 가 있다.

$M=\mathbb Rx$ 위에서 $f(tx)=t\Vert x\Vert$ 로 두면 $\Vert f\Vert=1$ 이고, 노름 보존 확장이 결론을 준다. 따름정리가 둘이다. 노름이 쌍대공간의 상한으로 적힌다.

$$
\Vert x\Vert=\sup\_{\Vert f\Vert\le1}\vert f(x)\vert
$$

이중쌍대로 가는 표준 사상 $X\to X^{\ast\ast}$ 는 등거리 단사다. 전사까지 성립하는 공간을 반사적이라 한다.

## 복소 판본

복소 노름공간에서도 노름 보존 확장이 성립한다. 부분공간 위의 복소 선형범함수 $f$ 의 실부 $u=\mathrm{Re}\thinspace f$ 를 실선형범함수로 확장해 $U$ 를 얻고 $F(x)=U(x)-iU(ix)$ 로 두면, $F$ 는 복소 선형이고 $F$ 의 실부가 $U$ 이며 $\Vert F\Vert=\Vert f\Vert$ 다.[^1]

## 볼록집합의 분리

$A,B$ 가 노름공간의 겹치지 않는 볼록집합이고 $A$ 가 열린집합이면, $f(a)\lt c\le f(b)$ 가 모든 $a\in A$ 와 $b\in B$ 에서 성립하는 $f\in X^\ast$ 와 실수 $c$ 가 있다.

증명의 요지. $C=A-B$ 는 열린 볼록집합이고 $0\notin C$ 다. $c\_0\in C$ 를 하나 잡으면 $D=C-c\_0$ 이 $0$ 을 내부점으로 가지므로 Minkowski 범함수 $p\_D$ 가 열등선형이고, $-c\_0\notin D$ 에서 $p\_D(-c\_0)\ge1$ 이다. $\mathbb Rc\_0$ 위에서 $g(-tc\_0)=t$ 로 두면 $g\le p\_D$ 이고, 확장 정리가 주는 $F\le p\_D$ 가 $C$ 에서 음수다. $f=-F$ 와 $c=\inf\_{b\in B}f(b)$ 로 두면 결론을 얻는다.

## 선택공리와의 세기

Hahn–Banach 정리는 **ZF**(Zermelo–Fraenkel 집합론) 만으로는 증명되지 않고, 초필터 보조정리보다 진정으로 약하다.[^2] 분리가능 노름공간으로 제한하면 가산선택으로 증명된다.

# 활용

- [쌍대 공간](dual-space.md)의 정의는 유한차원에서 쌍대 기저로 비자명성을 얻지만 무한차원에서는 그 방법이 없다. 쌍대공간의 비자명성이 노름 보존 확장에서 나온다.
- [변분법의 직접법](direct-method.md)은 볼록이고 노름으로 닫힌 준위집합이 약닫혀 있음을 분리정리로 얻어 순차 약하반연속성을 확인한다.
- [Lagrange 쌍대성](lagrange-duality.md)의 강쌍대성 증명은 값함수의 그래프 위쪽 집합과 한 점을 분리정리로 가른다.
- [Banach–Alaoglu 정리](banach-alaoglu.md)로 뽑은 약 $\ast$ 수렴 극한이 원래 공간의 점임을 보일 때 노름의 쌍대 표현을 쓴다.
- $\ell^\infty$ 위의 Banach 극한은 극한 범함수를 이동불변성과 함께 확장한 것이고, 직관 절의 계산이 그 구성이다.
- [선택공리의 약한 형태](weak-choice-principles.md)에서 초필터 보조정리의 세기를 재는 기준 명제로 쓴다.

[^1]: H. F. Bohnenblust and A. Sobczyk, "Extensions of functionals on complex linear spaces", *Bulletin of the American Mathematical Society* 44 (1938), 91–93.

[^2]: 초필터 보조정리가 Hahn–Banach 정리를 함의함은 W. A. J. Luxemburg, "Reduced powers of the real number system and equivalents of the Hahn–Banach extension theorem", in *Applications of Model Theory to Algebra, Analysis, and Probability* (1969), 123–137. 역이 성립하지 않음은 D. Pincus, "Independence of the prime ideal theorem from the Hahn–Banach theorem", *Bulletin of the American Mathematical Society* 78 (1972), 766–770. ZF 만으로 증명되지 않음은 M. Foreman and F. Wehrung, "The Hahn–Banach theorem implies the existence of a non-Lebesgue measurable set", *Fundamenta Mathematicae* 138 (1991), 13–19 와 모든 실수 집합이 가측인 모형을 함께 쓴 결과다.

# 연관 문서

## 선수지식

- [Banach 공간](banach-spaces.md)
- [쌍대 공간](dual-space.md)

## 더 알아보기

- [Krein–Milman 정리](krein-milman.md)

#functional_analysis #analysis #linear_algebra #set_theory #theorem
