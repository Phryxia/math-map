# 빠르게 자라는 계층

# 개요

**빠르게 자라는 계층(fast-growing hierarchy)** 은 [서수](ordinals.md)마다 자연수 함수 하나를 붙여 증가 속도의 순서를 만든 함수족이다. $n+1$, $2n$, $2^n$, $2$ 를 $n$ 번 쌓은 탑은 각각 앞 함수를 $n$ 번 되풀이한 것인데, 자연수 번호를 다 써도 $n$ 번째 함수를 $n$ 에서 계산하는 함수처럼 더 빠른 함수가 있어 번호가 모자란다. 이 계층은 번호로 서수를 써서 증가 속도를 줄 세우고, 형식 체계가 모든 입력에서 값을 가짐을 증명할 수 있는 함수가 이 계층의 어디까지인지로 그 체계의 세기를 잰다.

# 직관

증가 속도가 다른 함수를 늘어놓는다. $n+1$, $2n$, $2^n$, 그리고 $2$ 를 $n$ 번 쌓은 탑이다. 늘어놓은 순서에 규칙이 있다. 각 함수는 앞 함수를 $n$ 번 되풀이한 것이다. $n+1$ 을 $n$ 번 되풀이하면 $2n$ 쯤이 되고, $2n$ 을 $n$ 번 되풀이하면 $2^n n$ 쯤이 되며, 그것을 다시 $n$ 번 되풀이하면 탑이 된다.

되풀이를 한 번 더 할 때마다 번호를 하나 올려 $F_0,F_1,F_2,\dots$ 로 적는다. 자연수 번호를 다 써도 더 빠른 함수가 있다. $F_k$ 는 어느 것이든 $k$ 를 고정한 함수이므로, $n$ 이 커질 때 $n$ 번째 함수를 쓰는 $n\mapsto F_n(n)$ 이 모든 $F_k$ 보다 빨리 자란다. 이 함수에 $F_\omega$ 라는 번호를 준다.

$F_\omega$ 에서 다시 되풀이를 시작하면 $F_{\omega+1},F_{\omega+2},\dots$ 가 나오고, 그것들의 대각선이 $F_{\omega\cdot2}$ 다. 번호는 서수를 세는 순서로 붙는다.

# 정의

## 기본열

극한 서수 $\lambda$ 에 대해 $\lambda$ 로 수렴하는 증가 수열 $\lambda\lbrack 0\rbrack\lt\lambda\lbrack 1\rbrack\lt\cdots$ 를 하나 골라 $\lambda$ 의 **기본열(fundamental sequence)** 이라 한다. $\varepsilon_0$ 미만의 서수에는 Cantor 표준형(Cantor normal form)으로 다음 기본열을 쓴다.

$$
\omega\lbrack n\rbrack=n,\qquad(\omega^{\alpha+1})\lbrack n\rbrack=\omega^\alpha\cdot n,\qquad(\omega^\lambda)\lbrack n\rbrack=\omega^{\lambda\lbrack n\rbrack}
$$

$\varepsilon_0$ 자신은 $\varepsilon_0\lbrack 0\rbrack=1$ 과 $\varepsilon_0\lbrack n+1\rbrack=\omega^{\varepsilon_0\lbrack n\rbrack}$ 으로 둔다.

이 규칙으로 $(\omega^2)\lbrack 3\rbrack=\omega\cdot 3$ 이고 $(\omega^\omega)\lbrack 2\rbrack=\omega^2$ 이다. 직관 절의 $F_\omega$ 는 $\omega\lbrack n\rbrack=n$ 을 쓴 것이다.

## 계층

기본열을 고정하고 다음으로 정의한다.

$$
F_0(n)=n+1,\qquad F_{\alpha+1}(n)=F_\alpha^{n+1}(n),\qquad F_\lambda(n)=F_{\lambda\lbrack n\rbrack}(n)
$$

$F_\alpha^{k}$ 는 $F_\alpha$ 를 $k$ 번 합성한 것이고, 셋째 식의 $\lambda$ 는 극한 서수다. 이 함수족 $(F_\alpha)$ 를 빠르게 자라는 계층이라 한다.

$F_1(2)=F_0^3(2)=5$ 이고, $F_\omega(2)=F_{\omega\lbrack 2\rbrack}(2)=F_2(2)$ 다. $F_2(2)=F_1^3(2)$ 는 $2\mapsto 5\mapsto 11\mapsto 23$ 으로 $23$ 이다.

## 작은 번호의 값

$$
F_1(n)=2n+1,\qquad F_2(n)=2^{n+1}(n+1)-1,\qquad F_3(n)\gt 2\uparrow\uparrow n
$$

$F_\omega(n)=F_n(n)$ 은 Ackermann 함수(Ackermann function)와 같은 속도로 자란다.

# 성질

## 순서

$\alpha\lt\beta$ 이면 $F_\beta$ 가 $F_\alpha$ 를 결국 넘는다. 곧 충분히 큰 모든 $n$ 에서 $F_\alpha(n)\lt F_\beta(n)$ 이다.

후속 서수에서는 정의가 $F_\alpha$ 를 $n+1$ 번 합성하므로 값이 커진다. 극한 서수에서는 기본열이 증가하므로 $n$ 이 커질 때 $\lambda\lbrack n\rbrack$ 이 어떤 $\alpha\lt\lambda$ 도 결국 넘는다.

## 체계가 증명하는 전 함수

함수 $f$ 가 [재귀함수](recursive-functions.md)이고 [Peano 공리](peano-axioms.md)계가 $f$ 는 모든 입력에서 값을 갖는다는 명제를 증명하면, 어떤 $\alpha\lt\varepsilon_0$ 에 대해 $f$ 가 $F_\alpha$ 로 유계다(Wainer).[^1]

거꾸로 $\alpha\lt\varepsilon_0$ 마다 Peano 산술이 $F_\alpha$ 의 전역성을 증명한다. 그러므로 $F\_{\varepsilon_0}$ 는 Peano 산술이 전역성을 증명하지 못하는 가장 작은 자리에 놓이고, 이 서수를 Peano 산술의 증명론적 서수(proof-theoretic ordinal)라 한다.

## 기본열 의존성

계층의 각 함수는 고른 기본열에 따라 달라진다. 서수 하나에 붙는 함수가 하나로 정해지지 않는다. 그러나 위 정리가 말하는 유계 관계는 표준형으로 정한 기본열에서 성립하고, Cantor 표준형에서 오는 다른 기본열에서도 같은 서수 수준이 나온다.

# 활용

- 독립 명제의 증가 속도. [Goodstein 정리](goodstein-theorem.md)에서 수열의 길이, [Paris–Harrington 정리](paris-harrington.md)에서 최소 $N$ 을 주는 함수는 둘 다 $F\_{\varepsilon_0}$ 와 같은 속도로 자란다. Wainer 정리가 두 명제의 독립성을 준다.
- 체계의 비교. 원시재귀 산술(primitive recursive arithmetic)은 $F_\omega$ 미만, Peano 산술은 $F\_{\varepsilon_0}$ 미만, [2차 산술](second-order-arithmetic.md)의 부분체계는 더 큰 서수에 대응한다. 증명론적 서수로 체계의 세기를 한 줄에 놓는다.
- 알고리즘의 복잡도 상한. 잘 준순서(well-quasi-order)를 쓰는 종료 증명에서 단계 수의 상한이 이 계층으로 표현된다. Ackermann 급 이상의 상한을 갖는 결정 절차를 분류하는 데 쓰인다.

[^1]: S. S. Wainer, "A classification of the ordinal recursive functions", Arch. Math. Logik Grundlag. 13 (1970), 136–153.

# 연관 문서

## 선수지식

- [서수](ordinals.md)
- [재귀함수](recursive-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#logic #foundations #computation
