# 반사 공간

# 개요

반사 공간은 이중쌍대로 가는 표준 매장이 전사인 Banach 공간이다. [쌍대 공간](dual-space.md)을 두 번 취하면 원래 공간이 등거리로 들어가고, 그 상이 이중쌍대 전체가 되는 경우를 가리킨다.

반사성은 닫힌 단위구가 약한 위상에서 콤팩트한 것과 동치다. 유계인 수열에서 약수렴하는 부분열을 뽑는 논증이 이 성질에 기댄다.

# 직관

$\ell^2$ 에서 표준기저 $e\_n$ 은 $\Vert e\_n\Vert=1$ 로 유계인데 $n\ne m$ 에서 $\Vert e\_n-e\_m\Vert=\sqrt2$ 이므로 Cauchy 부분열이 없다. 노름으로 수렴하는 부분열을 뽑으려는 계산은 여기서 멈춘다.

같은 열을 연속 선형범함수로 재 본다. $f\in(\ell^2)^\ast$ 는 어떤 $y\in\ell^2$ 로 $f(x)=\sum\_k x\_k y\_k$ 로 적히므로 $f(e\_n)=y\_n$ 이고, $\sum\_k\vert y\_k\vert^2$ 가 유한하므로 $y\_n\to0$ 이다. 모든 $f$ 에서 $f(e\_n)\to0$ 이니 범함수의 눈으로는 $e\_n$ 이 $0$ 으로 간다.

노름 수렴을 포기하고 모든 연속 선형범함수의 값이 수렴하는 것을 수렴으로 삼으면 유계인 열에서 부분열을 뽑을 수 있다. 이 뽑기가 되는 공간이 반사 공간이고, $\ell^2$ 처럼 쌍대공간의 원소가 원래 공간의 원소로 적히는 것이 그 조건의 내용이다.

# 정의

## 표준 매장

Banach 공간 $X$ 의 **표준 매장** $J:X\to X^{\ast\ast}$ 는 벡터를 그 벡터에서의 값매김으로 보낸다.

$$
J(x)(f)=f(x)\qquad(x\in X,\thinspace f\in X^\ast)
$$

$J$ 는 선형이고, [Hahn–Banach 정리](hahn-banach-theorem.md)가 주는 $\Vert x\Vert=\sup\_{\Vert f\Vert\le1}\vert f(x)\vert$ 에서 $\Vert J(x)\Vert=\Vert x\Vert$ 가 나오므로 등거리 단사다.

## 반사 공간

$J$ 가 전사이면 $X$ 를 **반사 공간**이라 한다. $X$ 와 $X^{\ast\ast}$ 가 등거리 동형인 것만으로는 반사성이 아니다. 동형사상이 $J$ 여야 한다.[^1]

# 성질

## Kakutani 정리

$X$ 의 닫힌 단위구가 약한 위상에서 콤팩트한 것과 $X$ 가 반사적인 것은 동치다.[^2]

반사적이면 $J$ 가 단위구를 $X^{\ast\ast}$ 의 단위구로 보내고 [Banach–Alaoglu 정리](banach-alaoglu.md)가 그 단위구의 약 $\ast$ 콤팩트성을 주며, $J$ 가 전사일 때 $X$ 의 약한 위상과 $X^{\ast\ast}$ 의 약 $\ast$ 위상이 일치한다.

## 유전 성질

- $X$ 가 반사적인 것과 $X^\ast$ 가 반사적인 것은 동치다.
- 반사 공간의 닫힌 부분공간과 몫공간은 반사적이다.
- 반사 공간은 완비이므로 Banach 공간이다. 노름공간이 반사적이려면 먼저 완비여야 한다.

## Eberlein–Šmulian 정리

Banach 공간의 약한 위상에서 집합이 콤팩트한 것과 순차 콤팩트한 것은 동치다.[^2] 그래서 반사 공간에서는 유계인 수열이 약수렴하는 부분열을 가진다. 약한 위상은 거리화되지 않으므로 콤팩트성과 순차 콤팩트성이 일치할 이유가 따로 없고, 이 정리가 그 일치를 준다.

## Milman–Pettis 정리

[균일 볼록](uniformly-convex-spaces.md) Banach 공간은 반사적이다.[^3] 균일 볼록은 단위구의 두 점이 $\varepsilon$ 이상 떨어져 있으면 중점의 노름이 $1-\delta(\varepsilon)$ 이하라는 조건이다. $1\lt p\lt\infty$ 의 $L^p$ 가 Clarkson 부등식으로 균일 볼록이므로 이 정리로 반사성을 얻는다.

## 반사적이 아닌 공간

$\ell^1$ 의 표준기저 $e\_n$ 은 약수렴하는 부분열을 갖지 않는다. 좌표마다 $e\_n$ 의 값이 $0$ 으로 가므로 약한 극한은 $0$ 뿐인데, $f=(1,1,1,\dots)\in\ell^\infty=(\ell^1)^\ast$ 에서 $f(e\_n)=1$ 이다. Eberlein–Šmulian 정리로 $\ell^1$ 의 단위구는 약콤팩트하지 않고 Kakutani 정리로 $\ell^1$ 은 반사적이 아니다. $\ell^\infty$, $C\lbrack 0,1\rbrack$, $L^1\lbrack 0,1\rbrack$ 도 반사적이 아니다.

## James 정리

Banach 공간 $X$ 가 반사적인 것과, 모든 $f\in X^\ast$ 가 닫힌 단위구에서 최댓값을 얻는 것은 동치다.[^4]

# 활용

- $1\lt p\lt\infty$ 에서 [$L^p$ 공간](lp-spaces.md)의 쌍대가 $L^q$ 이고 두 번 취하면 $L^p$ 로 돌아오므로 반사적이다. $p=1$ 과 $p=\infty$ 에서 이 사슬이 끊긴다.
- [Hilbert 공간](hilbert-spaces.md)은 Riesz 표현 정리로 자기 쌍대와 등거리이고 그 동형이 표준 매장과 맞물려 반사적이다.
- [변분법의 직접법](direct-method.md)은 최소화열이 유계일 때 약수렴 부분열을 뽑는다. 정의역을 반사 공간으로 잡는 것이 그 단계의 전제다.
- [Sobolev 공간](sobolev-spaces.md) $W^{k,p}$ 는 $1\lt p\lt\infty$ 에서 반사적이므로 타원형 방정식의 약해 존재 증명에 쓰인다. $p=1$ 과 $p=\infty$ 에서는 다른 논증이 필요하다.

[^1]: R. C. James, "A non-reflexive Banach space isometric with its second conjugate space", *Proceedings of the National Academy of Sciences* 37 (1951), 174–177.

[^2]: Walter Rudin, *Functional Analysis*, 2nd ed., McGraw-Hill, 1991, 4 장. Kakutani 정리는 정리 4.2, Eberlein–Šmulian 정리는 같은 장의 주석과 정리 3.17 의 따름정리.

[^3]: D. P. Milman, "On some criteria for the regularity of spaces of the type (B)", *Doklady Akademii Nauk SSSR* 20 (1938), 243–246. B. J. Pettis, "A proof that every uniformly convex space is reflexive", *Duke Mathematical Journal* 5 (1939), 249–253.

[^4]: R. C. James, "Characterizations of reflexivity", *Studia Mathematica* 23 (1964), 205–216.

# 연관 문서

## 선수지식

- [쌍대 공간](dual-space.md)
- [Banach–Alaoglu 정리](banach-alaoglu.md)

## 더 알아보기

- [균일 볼록 공간](uniformly-convex-spaces.md)

#functional_analysis #analysis #topology #linear_algebra
