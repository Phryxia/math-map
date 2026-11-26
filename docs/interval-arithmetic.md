# 구간 산술

# 개요

**구간 산술(interval arithmetic)** 은 수 대신 그 수가 들어 있는 구간으로 계산해, 결과 구간이 참값을 반드시 포함하게 하는 계산법이다. 가로가 $1.9$ 와 $2.1$ 사이, 세로가 $2.9$ 와 $3.1$ 사이로 잰 판의 넓이는 한 수로 정해지지 않지만 $5.51$ 과 $6.51$ 사이라는 것은 확실하다. 구간 산술은 사칙연산마다 이런 끝값 계산을 하고 컴퓨터의 반올림도 바깥쪽으로 해서, 측정 오차와 반올림 오차를 모두 담은 보장된 범위를 얻는다.

# 직관

[부동소수점 산술](floating-point-arithmetic.md)에서 $0.1+0.2$ 는 $0.30000000000000004$ 이고, 연산마다 생기는 이런 오차가 쌓인 결과가 참값에서 얼마나 떨어졌는지는 결과만 보아서는 알 수 없다. 넓이 계산의 예처럼 들어오는 수도 정확한 값이 아니라 범위로만 알려진 경우가 많다.

그래서 수 하나 대신 아래 끝과 위 끝 두 수를 들고 다닌다. 가로 $\lbrack 1.9,2.1\rbrack$ 와 세로 $\lbrack 2.9,3.1\rbrack$ 를 곱하면 넓이는 작은 끝끼리 곱한 $5.51$ 과 큰 끝끼리 곱한 $6.51$ 사이다. 아래 끝을 계산할 때는 아래로, 위 끝을 계산할 때는 위로 반올림하면 반올림이 일어나도 참값이 구간 밖으로 나가지 않는다.

같은 계산을 끝까지 이어 가면 결과 구간의 폭이 계산 전체의 오차 상한이다. 폭이 충분히 좁으면 그 자릿수까지는 증명된 값이다.

# 정의

## 구간과 사칙연산

**구간(interval)** 은 $a\le b$ 인 실수로 정한 닫힌구간 $X=\lbrack a,b\rbrack$ 이다. 폭은 $w(X)=b-a$ 다. 두 구간 $X=\lbrack a,b\rbrack$, $Y=\lbrack c,d\rbrack$ 의 연산은 $x\in X$, $y\in Y$ 의 연산 결과 전체를 담는 가장 작은 구간으로 정의한다.

$$
\begin{aligned}
X+Y&=\lbrack a+c,\thinspace b+d\rbrack\cr
X-Y&=\lbrack a-d,\thinspace b-c\rbrack\cr
X\cdot Y&=\lbrack\min(ac,ad,bc,bd),\thinspace\max(ac,ad,bc,bd)\rbrack\cr
1/Y&=\lbrack 1/d,\thinspace1/c\rbrack\quad(0\notin Y)
\end{aligned}
$$

나눗셈은 $X/Y=X\cdot(1/Y)$ 다. 직관 절의 넓이는 네 곱 $5.51$, $5.89$, $6.09$, $6.51$ 의 최솟값과 최댓값이다.

컴퓨터에서는 아래 끝을 $-\infty$ 쪽으로, 위 끝을 $+\infty$ 쪽으로 반올림한다. 이것을 **바깥 반올림(outward rounding)** 이라 한다.

## 구간 확장

실수 함수 $f$ 의 **구간 확장(interval extension)** 은 구간을 받아 구간을 내는 함수 $F$ 로, 모든 구간 $X$ 에서 $f$ 의 치역 $f(X)=\lbrace f(x):x\in X\rbrace$ 를 포함하는 것이다. $f$ 를 적은 식에서 변수를 구간으로, 연산을 구간 연산으로 바꾼 것을 **자연 구간 확장(natural interval extension)** 이라 한다.

# 성질

## 포함 정리

정리. $f$ 가 사칙연산으로 적힌 식이고 $F$ 가 그 자연 구간 확장이면 $f(X)\subseteq F(X)$ 다. 또 $X\subseteq X'$ 이면 $F(X)\subseteq F(X')$ 이다.

증명의 요지. 각 구간 연산이 두 성질을 만족하고, 식은 연산의 합성이므로 귀납한다. 바깥 반올림은 결과 구간을 넓히기만 하므로 포함이 유지된다.

## 의존성 문제

자연 구간 확장은 같은 변수가 식에 여러 번 나오면 그 변수들이 같은 값이라는 것을 모른다. $X=\lbrack 1,2\rbrack$ 이면 $X-X=\lbrack -1,1\rbrack$ 이고, $0$ 이 아니다.

$f(x)=x(1-x)$ 의 $\lbrack 0,1\rbrack$ 위 치역은 $\lbrack 0,1/4\rbrack$ 다. 자연 구간 확장은 $1-X=\lbrack 0,1\rbrack$ 이므로 $X\cdot(1-X)=\lbrack 0,1\rbrack$ 를 내어 네 배 넓다. 같은 함수를 $\tfrac14-(x-\tfrac12)^2$ 으로 적고 제곱을 한 변수의 거듭제곱으로 계산하면 $X-\tfrac12=\lbrack -\tfrac12,\tfrac12\rbrack$, 그 제곱이 $\lbrack 0,\tfrac14\rbrack$ 이고 결과가 치역과 같다. 변수가 한 번만 나오는 식에서는 자연 구간 확장이 치역과 같다.

## 평균값 꼴

$f$ 가 미분가능하고 $F'$ 이 $f'$ 의 구간 확장이면, $X$ 의 가운데 점 $m$ 에서 다음 구간이 $f(X)$ 를 포함한다.

$$
F\_{\mathrm{mv}}(X)=f(m)+F'(X)\cdot(X-m)
$$

[평균값 정리](mean-value-theorem.md)로 $f(x)=f(m)+f'(\xi)(x-m)$ 인 $\xi\in X$ 가 있기 때문이다. 이 꼴이 치역보다 넓은 양은 $w(X)^2$ 에 비례하므로, 폭이 $w(X)$ 에 비례해 넓은 자연 구간 확장보다 좁은 구간에서 정확하다.

## 구간 Newton 법

$f$ 가 $X$ 에서 연속미분가능하고 $0\notin F'(X)$ 라 하자. $m\in X$ 에서 **구간 Newton 연산자(interval Newton operator)** 를 다음과 같이 둔다.

$$
N(X)=m-\frac{f(m)}{F'(X)}
$$

정리. $X$ 안의 근은 모두 $N(X)$ 에 있다. $N(X)\subseteq X$ 이면 $X$ 안에 근이 정확히 하나 있고, $N(X)\cap X=\varnothing$ 이면 $X$ 안에 근이 없다.

증명의 요지. 근 $r\in X$ 에서 평균값 정리로 $0=f(m)+f'(\xi)(r-m)$ 이므로 $r=m-f(m)/f'(\xi)\in N(X)$ 다. $0\notin F'(X)$ 이므로 $f$ 는 $X$ 에서 단조이고 근은 많아야 하나다. $X=\lbrack a,b\rbrack$, $f'\ge c\gt 0$, $f(m)\gt 0$ 인 경우에 $N(X)\subseteq X$ 는 $f(m)\le c(m-a)$ 를 함의하고, 평균값 정리로 $f(a)\le f(m)-c(m-a)\le 0$ 이다. [중간값 정리](intermediate-value-theorem.md)로 $\lbrack a,m\rbrack$ 에 근이 있다. 다른 부호의 경우도 같다.

$f(x)=x^2-2$, $X\_0=\lbrack 1,2\rbrack$, $m=1.5$ 에서 $f(m)=0.25$, $F'(X\_0)=2X\_0=\lbrack 2,4\rbrack$ 이므로 $N(X\_0)=\lbrack 1.375,1.4375\rbrack\subseteq X\_0$ 이다. 따라서 $\lbrack 1,2\rbrack$ 에 근이 하나 있다는 것이 증명된다.

$X\_{k+1}=X\_k\cap N(X\_k)$ 를 되풀이하면 폭이 $1$, $6.3\times10^{-2}$, $3.6\times10^{-4}$, $6.7\times10^{-9}$ 으로 [Newton 법](newton-method.md)처럼 이차로 줄고, 모든 구간이 $\sqrt2$ 를 포함한다.

# 활용

- 컴퓨터 보조 증명. Tucker 는 [Lorenz 계](lorenz-system.md)의 귀환 사상에 대한 부등식을 구간 산술로 검증해 이상한 끌개의 존재를 증명했다. Hales 의 [구 채우기](sphere-packing.md) 증명은 비선형 부등식 수천 개를 구간 산술로 검증한다.
- 해의 존재 검증. 수치해 근처의 작은 상자에서 구간 Newton 법의 포함 $N(X)\subseteq X$ 를 확인하면 그 상자 안에 참해가 있다. [쌍곡 3차원 다양체](hyperbolic-3-manifolds.md)의 붙임 방정식이 이 방법으로 검증된다.
- 전역 최적화. 상자를 나누어 가며 각 상자에서 목적함수의 구간 확장을 계산하고, 아래 끝이 지금까지 찾은 최솟값보다 큰 상자를 버린다. 남은 상자들이 전역 최솟값의 위치를 보장된 범위로 준다.
- 오차 전파. 측정값의 범위를 입력으로 넣어 공학 계산의 결과 범위를 얻는다. 의존성 문제 때문에 결과가 넓어지므로 식을 변수가 적게 나오도록 고쳐 쓴다.

# 연관 문서

## 선수지식

- [부동소수점 산술](floating-point-arithmetic.md)
- [Newton 법](newton-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #analysis #algorithms
