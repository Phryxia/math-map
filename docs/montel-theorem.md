# Montel 정리

# 개요

Montel 정리는 열린 집합에서 국소 유계인 [정칙함수](holomorphic-functions.md)족이 정규족이라는 정리다. 정규족이란 그 족의 임의의 수열에서 콤팩트 집합마다 균등수렴하는 부분열을 뽑을 수 있는 족이다. [Arzelà–Ascoli 정리](arzela-ascoli.md)는 그런 부분열을 얻으려고 동등연속을 가정으로 요구하는데, 정칙성이 그 가정을 유계성만으로 만들어 준다.

# 직관

단위원판 $\mathbb D$ 에서 $\vert f\_n\vert\le 1$ 인 정칙함수열이 있다. 값이 유계이니 수렴하는 부분열을 뽑고 싶다. 실함수에서는 유계만으로 안 된다. $\lbrack 0,2\pi\rbrack$ 에서 $g\_n(x)=\sin(nx)$ 는 $\vert g\_n\vert\le 1$ 이지만 어느 부분열도 균등수렴하지 않는다. $n$ 이 커지면서 진동이 빨라져 두 가까운 점의 값 차이가 줄지 않기 때문이다. Arzelà–Ascoli 정리는 그 진동을 막는 조건, 곧 동등연속을 가정에 넣는다.

정칙함수에서는 진동의 속도가 값에 묶인다. 중심 $a$, 반지름 $r$ 인 원 위에서 $\vert f\vert\le M$ 이라 하고 $\vert z-a\vert\le r/2$ 라 하면, Cauchy 적분 공식

$$
f'(z)=\frac{1}{2\pi i}\oint_{\vert w-a\vert=r}\frac{f(w)}{(w-z)^2}\thinspace dw
$$

에서 $\vert w-z\vert\ge r/2$ 이므로 $\vert f'(z)\vert\le 4M/r$ 이다. 도함수의 상계가 $f$ 에 상관없이 $M$ 과 $r$ 로만 정해지므로, 족의 모든 함수가 작은 원판에서 같은 Lipschitz 상수를 갖는다.

같은 Lipschitz 상수를 가진 함수들은 동등연속이다. $\sin(nx)$ 처럼 진동이 빨라지는 일이 정칙함수족에서는 일어나지 않고, Arzelà–Ascoli 정리의 가정이 유계성에서 따라 나온다.

# 정의

$\Omega\subseteq\mathbb C$ 를 열린 집합, $\mathcal F$ 를 $\Omega$ 에서 정칙인 함수들의 족이라 하자.

$\mathcal F$ 가 **국소 유계**라는 것은 각 $a\in\Omega$ 에 근방 $U$ 와 상수 $M$ 이 있어 모든 $f\in\mathcal F$ 와 모든 $z\in U$ 에서 $\vert f(z)\vert\le M$ 인 것이다.

$\mathcal F$ 가 **정규족**이라는 것은 $\mathcal F$ 의 임의의 수열 $(f\_n)$ 이 $\Omega$ 의 모든 콤팩트 부분집합에서 균등수렴하는 부분열을 갖는 것이다. 이 수렴을 $\Omega$ 에서의 국소 균등수렴이라 한다.

# 성질

## 국소 유계성과 정규성의 동치

*정리.* $\mathcal F$ 가 $\Omega$ 에서 정칙인 함수족이면, $\mathcal F$ 가 정규족일 필요충분조건은 $\mathcal F$ 가 국소 유계인 것이다[^1].

*증명의 요지.* 국소 유계를 가정한다. 콤팩트 $K\subset\Omega$ 를 잡고 $r$ 을 $K$ 에서 $\Omega$ 의 여집합까지의 거리의 $1/4$ 로 두면, $K$ 의 각 점을 중심으로 한 반지름 $2r$ 의 닫힌 원판이 $\Omega$ 에 들어가고 그 합집합에서 공통 상계 $M$ 을 얻는다. 직관 절의 추정이 $K$ 에서 $\vert f'\vert\le 4M/r$ 를 주므로 $\mathcal F$ 는 $K$ 에서 동등연속이고, Arzelà–Ascoli 정리가 $K$ 에서 균등수렴하는 부분열을 준다. $\Omega$ 를 콤팩트 집합의 증가열 $K\_1\subseteq K\_2\subseteq\cdots$ 로 덮고 부분열을 차례로 다시 뽑는 대각 논법으로 하나의 부분열을 얻는다.

역을 보인다. $\mathcal F$ 가 어떤 콤팩트 $K$ 에서 유계가 아니면 $\sup\_K\vert f\_n\vert\to\infty$ 인 수열 $(f\_n)$ 이 있다. 균등수렴하는 부분열은 $K$ 에서 유계이므로 이런 수열은 부분열을 갖지 못한다.

## 극한의 정칙성

정규족의 부분열이 수렴하는 자리는 다시 정칙함수다. $f\_n\to f$ 가 $\Omega$ 에서 국소 균등수렴이면 $f$ 는 $\Omega$ 에서 정칙이고 $f\_n'\to f'$ 도 국소 균등수렴한다. 삼각형의 경계 적분에서 극한을 교환하면 $\oint f=0$ 이 되어 Morera 정리로 정칙성이 나오고, 도함수의 수렴은 Cauchy 적분 공식에 극한을 넣어 얻는다.

같은 극한이 실함수에서는 성립하지 않는다. 연속함수의 균등극한은 연속이지만 미분가능성은 보존되지 않는다.

## 단사성과 영점의 보존

국소 균등수렴의 극한 $f$ 가 상수가 아니면, $f\_n$ 이 모두 단사일 때 $f$ 도 단사다. Hurwitz 정리가 근거다. 수렴하는 정칙함수열의 극한이 영점을 가지면 꼬리의 함수들도 그 근방에서 같은 개수의 영점을 가진다[^1].

## 두 값을 생략하는 족

*정리.* $a\ne b$ 인 두 복소수를 값으로 갖지 않는 $\Omega$ 위의 정칙함수족은 Riemann 구면 값의 국소 균등수렴에 대해 정규족이다[^2].

이 진술을 근본 Montel 정리라 한다. 국소 유계를 가정하지 않는 대신 극한으로 상수 $\infty$ 를 허용한다. 두 값을 뺀 평면의 보편피복이 원판이라는 사실에서 나오고, [Picard 정리](picard-theorems.md)의 큰 쪽이 여기서 따라 나온다.

# 활용

- [등각사상](conformal-mapping.md)의 Riemann 사상정리 증명. $\Omega$ 에서 $\mathbb D$ 로 가는 단사 정칙함수 가운데 한 점에서 도함수의 절댓값을 최대로 하는 것을 찾는 극값 문제인데, 그 최대를 실제로 달성하는 함수가 있다는 단계를 Montel 정리가 맡는다.
- Picard 정리. 근본 Montel 정리를 $f(z\_0+r\_n z)$ 꼴로 축소한 함수족에 적용해 본질적 특이점 근방에서 두 값을 생략할 수 없음을 얻는다.
- Arzelà–Ascoli 정리의 정규족 절이 적는 적용 사례의 본체다. 동등연속을 가정에서 결론으로 옮긴 꼴이므로, 정칙성이 실해석의 가정 하나를 덜어 주는 자리다.
- 유리함수의 반복 동역학에서 Fatou 집합은 반복합성의 족이 정규족이 되는 점들의 집합으로 정의된다. Julia 집합은 그 여집합이다.

[^1]: W. Rudin, *Real and Complex Analysis*, 3rd ed., McGraw-Hill, 1987, 14 장. 국소 유계성과 정규성의 동치, Hurwitz 정리, Riemann 사상정리의 증명을 차례로 다룬다.

[^2]: J. B. Conway, *Functions of One Complex Variable I*, 2nd ed., Springer, 1978, 12 장. 근본 Montel 정리와 Picard 정리의 유도를 다룬다.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)
- [Arzelà–Ascoli 정리](arzela-ascoli.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #functional_analysis
