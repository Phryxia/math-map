# 중간값 정리

# 개요

**중간값 정리(intermediate value theorem)** 는 구간에서 끊김 없이 이어진 함수, 곧 [연속함수](continuity.md)가 양 끝값 사이의 모든 값을 지난다는 정리다. $f(x)=x^2-2$ 는 $x=1$ 에서 음수이고 $x=2$ 에서 양수이므로 그 사이 어딘가에서 $0$ 이 될 것 같다. 그런데 유리수만 쓰면 $x^2=2$ 인 $x$ 가 없어 $f$ 가 $0$ 이 되는 점이 없다. 중간값 정리는 실수에 빈틈이 없다는 성질로 그런 점의 존재를 증명하고, 구간을 반씩 줄여 그 점을 찾는 방법도 준다.

# 직관

중간값 정리는 닫힌 구간 $\lbrack a,b\rbrack$ 위의 실숫값 연속함수 $f$ 가 $f(a)$ 와 $f(b)$ 사이의 모든 값을 구간 안의 어떤 점에서 갖는다는 정리다. B. Bolzano 가 1817 년에 증명했다[^1].

증명은 구간을 반씩 줄이는 이분법(bisection method)이고, 줄어드는 구간의 끝점이 수렴한다는 [수열의 극한](limits.md)의 실수 완비성을 쓴다.

$\sqrt 2$ 를 모르는 채로 $x^2=2$ 인 $x$ 를 찾는다. $f(x)=x^2-2$ 로 두면 $f(1)=-1\lt 0$ 이고 $f(2)=2\gt 0$ 이다. 가운데 $1.5$ 에서 $f(1.5)=0.25\gt 0$ 이므로 부호가 바뀌는 자리는 $\lbrack 1,1.5\rbrack$ 에 있다. 다시 가운데 $1.25$ 에서 $f(1.25)=-0.4375\lt 0$ 이므로 $\lbrack 1.25,1.5\rbrack$ 로 줄인다.

이 일을 되풀이하면 구간의 길이가 매번 반이 되고 왼쪽 끝은 늘기만, 오른쪽 끝은 줄기만 한다. 두 끝은 한 수 $c$ 로 모인다. 왼쪽 끝에서 $f$ 는 늘 $0$ 이하이고 오른쪽 끝에서 늘 $0$ 이상이다. $f$ 가 연속이므로 $c$ 에서의 값은 $0$ 이하이면서 $0$ 이상이고, $f(c)=0$ 이다.

같은 계산을 유리수만 가지고 하면 끝점은 똑같이 움직이지만 모이는 곳 $\sqrt 2$ 가 유리수가 아니다. 그래서 유리수 위의 함수 $x^2-2$ 는 $1$ 에서 음수, $2$ 에서 양수이지만 $0$ 이 되는 유리수가 없다. 끝점이 모이는 수가 늘 있다는 실수의 성질이 이 정리에 쓰인다.

# 정의

## 진술

정리. $f\colon\lbrack a,b\rbrack\to\mathbb R$ 가 연속이고 $y$ 가 $f(a)$ 와 $f(b)$ 사이의 실수이면 $f(c)=y$ 인 $c\in\lbrack a,b\rbrack$ 가 존재한다.

$g(x)=f(x)-y$ 로 바꾸면 $g(a)$ 와 $g(b)$ 의 부호가 다를 때 $g(c)=0$ 인 $c$ 가 있다는 진술과 같다. 이 꼴을 **Bolzano 정리(Bolzano's theorem)** 라고도 한다.

## 중간값 성질

구간 $I$ 위의 함수 $f$ 가 $I$ 의 두 점 $u\lt v$ 마다 $f(u)$ 와 $f(v)$ 사이의 모든 값을 $\lbrack u,v\rbrack$ 에서 가지면 $f$ 가 **중간값 성질(intermediate value property)** 을 갖는다고 한다. 중간값 정리는 구간 위의 연속함수가 중간값 성질을 갖는다는 정리다.

# 성질

## 이분법에 의한 증명

증명의 요지. $f(a)\lt 0\lt f(b)$ 라 한다. $a_0=a$, $b_0=b$ 로 두고 중점 $m=(a_n+b_n)/2$ 에서 $f(m)\le 0$ 이면 $\lbrack a_{n+1},b_{n+1}\rbrack=\lbrack m,b_n\rbrack$, 아니면 $\lbrack a_n,m\rbrack$ 로 둔다. 그러면 모든 $n$ 에서 $f(a_n)\le 0\lt f(b_n)$ 이다.

$(a_n)$ 은 증가하고 $b$ 로 위로 유계이므로 수렴한다. $b_n-a_n=(b-a)/2^n$ 이므로 $(b_n)$ 도 같은 극한 $c$ 로 간다. $f$ 가 $c$ 에서 연속이므로 $f(c)=\lim f(a_n)\le 0$ 이고 $f(c)=\lim f(b_n)\ge 0$ 이다. 따라서 $f(c)=0$ 이다.

증명에서 쓴 것은 "증가하고 위로 유계인 실수 수열은 수렴한다" 하나이고, 이것이 실수의 완비성이다. 직관 절의 예에서 유리수 위의 $x^2-2$ 가 반례이므로 완비성 없이는 정리가 성립하지 않는다.

## 위상적 형태

정리. 연결 공간 $X$ 위의 실숫값 연속함수 $f$ 의 상 $f(X)$ 는 구간이다.

실직선의 연결 부분집합은 구간뿐이고 연속함수는 연결 집합을 연결 집합으로 보낸다. 두 사실을 합치면 이 정리가 나온다. $X=\lbrack a,b\rbrack$ 이면 중간값 정리다. 증명은 [연결성](connectedness.md)에 있다.

## 역의 실패

중간값 성질을 갖는 함수가 연속일 필요는 없다. $x\ne 0$ 에서 $\sin(1/x)$, $x=0$ 에서 $0$ 인 함수는 $0$ 근처에서 $-1$ 과 $1$ 사이를 무한히 오가므로 중간값 성질을 갖지만 $0$ 에서 불연속이다.

**Darboux 정리(Darboux's theorem)** 에 따르면 구간에서 미분 가능한 함수의 [미분](derivative.md) $f'$ 은 연속이 아니어도 중간값 성질을 갖는다[^2].

## 따름정리

- 차수가 홀수인 실계수 다항식 $p$ 는 실근을 갖는다. 최고차 계수가 양수이면 $x\to\infty$ 에서 $p(x)\to\infty$, $x\to-\infty$ 에서 $p(x)\to-\infty$ 이므로 부호가 다른 두 점이 있다.
- 연속함수 $f\colon\lbrack 0,1\rbrack\to\lbrack 0,1\rbrack$ 는 고정점을 갖는다. $g(x)=f(x)-x$ 는 $g(0)\ge 0$, $g(1)\le 0$ 이다. 이것은 [Brouwer 고정점 정리](brouwer-fixed-point.md)의 1 차원 경우다.
- 구간 위의 연속인 단사함수는 순증가이거나 순감소다. 그렇지 않으면 세 점 $u\lt v\lt w$ 에서 $f(v)$ 가 $f(u)$, $f(w)$ 의 바깥에 있고, 중간값 정리로 같은 값을 두 번 갖는다.

## 구성적 증명과 근사형

이분법은 중점에서 $f(m)\le 0$ 인지 $f(m)\gt 0$ 인지 판정한다. [직관주의](intuitionism.md)에서는 실수의 이 판정이 일반적으로 가능하지 않아 정리의 정확한 형태가 증명되지 않는다. 증명되는 것은 근사형이다. $f(a)\lt 0\lt f(b)$ 이면 모든 $\varepsilon\gt 0$ 에 대해 $\vert f(c)\vert\lt\varepsilon$ 인 $c$ 가 있다[^3]. [역수학](reverse-mathematics.md)에서는 정확한 형태가 기본 체계 RCA₀(recursive comprehension axiom) 에서 증명된다.

# 활용

- 방정식의 수치 해법. [이진 탐색](binary-search.md)의 실수판인 이분법은 부호가 바뀌는 구간을 $n$ 번 반으로 줄여 근을 오차 $(b-a)/2^n$ 안에서 찾는다. 근이 있다는 근거가 중간값 정리다.
- [실폐체](real-closed-fields.md). 대수학의 기본정리의 증명이 홀수 차 실계수 다항식의 실근을 쓰고, 순서체가 실폐체인 것은 다항식에 대해 중간값 정리가 성립하는 것과 동치다.
- 고차원의 일반화. 중간값 정리는 부호가 바뀌는 것을 쓰는데 평면의 벡터에는 부호가 없다. 부호 대신 감는 횟수를 세는 것이 [Brouwer 차수](brouwer-degree.md)이고, 원 위의 $f(x)-f(-x)$ 에 중간값 정리를 쓰는 논증을 구면으로 넓힌 것이 [Borsuk–Ulam 정리](borsuk-ulam.md)다.
- 적분의 평균값 정리(mean value theorem for integrals). 연속함수 $f$ 와 부호가 바뀌지 않는 적분 가능 함수 $g$ 에 대해 $\int_a^bfg=f(\xi)\int_a^bg$ 인 $\xi$ 가 있다. $f$ 의 최솟값과 최댓값 사이의 값이므로 중간값 정리로 $\xi$ 가 나온다. 구적법의 오차 공식이 이 꼴을 쓴다.

[^1]: B. Bolzano, *Rein analytischer Beweis des Lehrsatzes, dass zwischen je zwey Werthen, die ein entgegengesetztes Resultat gewähren, wenigstens eine reelle Wurzel der Gleichung liege*, Prag, 1817.
[^2]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, Theorem 4.23, Theorem 5.12.
[^3]: A. S. Troelstra, D. van Dalen, *Constructivism in Mathematics, Vol. I*, North-Holland, 1988, 6 장.

# 연관 문서

## 선수지식

- [연속함수](continuity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #topology #foundations
