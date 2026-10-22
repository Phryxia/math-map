# 부호 측도

# 개요

**부호 측도(signed measure)** 는 음수 값도 가질 수 있는 [측도](measure.md)다. 겹치지 않는 조각의 값을 더하면 전체의 값이라는 가산 가법성은 그대로 두고, 값이 $0$ 이상이라는 조건만 뺀다. 부호가 바뀌는 함수 $f$ 를 집합 위에서 적분한 값 $E\mapsto\int_E f\thinspace d\mu$ 와 두 유한 측도의 차 $\mu_1-\mu_2$ 가 대표적인 예다.

Hahn 분해 정리(Hahn decomposition theorem)에 따르면 공간을 값이 양수인 쪽과 음수인 쪽으로 가를 수 있다. 그 결과로 모든 부호 측도는 서로 겹치지 않는 곳에 실린 두 측도의 차로 쓰이고, 이것이 Jordan 분해(Jordan decomposition)다.

# 직관

구간 $[-1,1]$ 의 부분집합 $E$ 에 $\nu(E)=\int_E x\thinspace dx$ 를 준다. 겹치지 않는 조각으로 나누면 조각의 적분을 더한 것이 전체의 적분이므로 $\nu$ 는 측도처럼 더해진다. 그러나 $\nu([-1,0])=-\frac12$ 이어서 측도가 아니다.

$\nu$ 의 값이 가장 큰 집합은 $x\ge 0$ 인 점을 전부 모은 $P=[0,1]$ 이고 값은 $\frac12$ 다. 가장 작은 집합은 나머지 $N=[-1,0)$ 이고 값은 $-\frac12$ 다. $P$ 의 부분집합에서 $\nu$ 는 항상 $0$ 이상이고 $N$ 의 부분집합에서는 항상 $0$ 이하다. 그래서 $\nu^+(E)=\nu(E\cap P)$ 와 $\nu^-(E)=-\nu(E\cap N)$ 은 둘 다 측도이고 $\nu=\nu^+-\nu^-$ 다.

전체 구간의 값은 $\nu([-1,1])=\frac12-\frac12=0$ 이다. 양수 쪽과 음수 쪽이 지워져서 $0$ 이 나왔으므로, $\nu$ 가 얼마나 큰지는 $\nu^+$ 와 $\nu^-$ 를 더해 $\frac12+\frac12=1$ 로 잰다. 이 값은 $\int_{-1}^1\lvert x\rvert\thinspace dx$ 와 같다.

이 예에서는 함수 $x$ 의 부호가 $P$ 와 $N$ 을 정했다. 함수 없이 집합마다 값만 주어진 경우에도 이런 $P$ 와 $N$ 이 있는지가 Hahn 분해 정리의 내용이다.

# 정의

## 부호 측도

$(X,\mathcal M)$ 이 가측 공간일 때 함수 $\nu:\mathcal M\to\lbrack -\infty,\infty\rbrack$ 가 다음을 만족하면 **부호 측도** 라 한다.

1. $\nu(\varnothing)=0$ 이다.
2. $\nu$ 는 $+\infty$ 와 $-\infty$ 가운데 많아야 하나만 값으로 갖는다.
3. 서로소인 가측집합 $E_1,E_2,\dots$ 에 대해 $\nu\bigl(\bigcup_n E_n\bigr)=\sum_n\nu(E_n)$ 이다. 좌변이 유한하면 우변의 급수는 절대수렴한다.

둘째 조건은 $\infty-\infty$ 가 나오지 않게 한다. 값이 모두 유한하면 **유한 부호 측도** 라 한다.

## 양집합과 음집합

가측집합 $P$ 의 가측 부분집합 $E$ 마다 $\nu(E)\ge 0$ 이면 $P$ 를 **양집합(positive set)** 이라 한다. 모든 가측 부분집합에서 $\nu(E)\le 0$ 이면 **음집합(negative set)** 이고, 양집합이면서 음집합이면 **영집합(null set)** 이다.

$\nu(E)=0$ 인 것만으로는 영집합이 아니다. 직관 절의 $\nu$ 에서 $\nu([-1,1])=0$ 이지만 $[-1,1]$ 은 영집합이 아니다.

## 상호 특이

두 측도 $\mu$ 와 $\lambda$ 에 대해 $X=A\cup B$ 인 서로소 가측집합 $A,B$ 가 존재해 $\mu(B)=0$ 이고 $\lambda(A)=0$ 이면 $\mu$ 와 $\lambda$ 가 **상호 특이(mutually singular)** 하다고 하고 $\mu\perp\lambda$ 로 쓴다. 두 측도가 겹치지 않는 곳에 실려 있다는 뜻이다.

## 전변동

부호 측도 $\nu$ 와 가측집합 $E$ 에 대해

$$
\lvert\nu\rvert(E)=\sup\Bigl\lbrace\sum_{i=1}^k\lvert\nu(E_i)\rvert : E=E_1\cup\dots\cup E_k,\thickspace E_i\thickspace\text{서로소 가측}\Bigr\rbrace
$$

로 정의한 $\lvert\nu\rvert$ 를 $\nu$ 의 **전변동(total variation)** 이라 한다. 유한 부호 측도에서 $\Vert\nu\Vert=\lvert\nu\rvert(X)$ 를 전변동 노름이라 한다. 정의에서 $\lvert\nu(E)\rvert\le\lvert\nu\rvert(E)$ 가 바로 나온다.

# 성질

## Hahn 분해 정리

부호 측도 $\nu$ 에 대해 양집합 $P$ 와 음집합 $N$ 이 존재해 $X=P\cup N$ 이고 $P\cap N=\varnothing$ 이다. 다른 분해 $X=P'\cup N'$ 이 있으면 대칭차 $P\mathbin{\triangle}P'$ 은 $\nu$ 의 영집합이다.

증명의 요지. $\nu$ 가 $+\infty$ 를 갖지 않는다고 둔다. 양집합의 값의 상한 $s$ 를 잡고 $\nu(P_n)\to s$ 인 양집합 $P_n$ 을 고른다. 양집합의 가산 합집합은 양집합이므로 $P=\bigcup_n P_n$ 은 양집합이고 $\nu(P)=s$ 다. $N=X\setminus P$ 가 음집합이 아니라면 $\nu(E)\gt 0$ 인 $E\subseteq N$ 이 있고, 아래 보조정리로 $E$ 안에 $\nu(A)\gt 0$ 인 양집합 $A$ 가 있다. 그러면 $P\cup A$ 가 값이 $s$ 보다 큰 양집합이 되어 모순이다.

보조정리. $0\lt\nu(E)\lt\infty$ 이면 $E$ 는 $\nu(A)\gt 0$ 인 양집합 $A$ 를 포함한다. $E$ 가 양집합이 아니면 값이 $-1/n$ 보다 작은 부분집합을 갖는 가장 작은 자연수 $n_1$ 을 잡고 그런 부분집합 $B_1$ 을 뗀다. 남은 집합에서 같은 일을 되풀이해 $B_1,B_2,\dots$ 를 떼고 $A=E\setminus\bigcup_k B_k$ 로 둔다. $\nu(A)=\nu(E)-\sum_k\nu(B_k)\gt\nu(E)\gt 0$ 이고 $\nu(A)$ 가 유한하므로 $\sum_k 1/n_k\lt\infty$ 이고 $n_k\to\infty$ 다. $A$ 의 부분집합 $B$ 가 $\nu(B)\lt -1/m$ 을 만족하면 $n_k\gt m$ 인 단계에서 $n_k$ 대신 $m$ 을 골랐어야 하므로 모순이다. 그래서 $A$ 는 양집합이다.

## Jordan 분해 정리

부호 측도 $\nu$ 는 상호 특이한 두 측도의 차로 유일하게 쓰인다.

$$
\nu=\nu^+-\nu^-,\qquad \nu^+\perp\nu^-
$$

Hahn 분해 $X=P\cup N$ 을 잡고 $\nu^+(E)=\nu(E\cap P)$, $\nu^-(E)=-\nu(E\cap N)$ 으로 두면 이 꼴이 나온다. 유일성은 상호 특이한 다른 쌍 $\mu_1-\mu_2$ 가 주는 집합 $A,B$ 가 또 하나의 Hahn 분해라는 데서 유도된다.

$\nu^+$ 를 **양변동(positive variation)**, $\nu^-$ 를 **음변동(negative variation)** 이라 한다. 이 분해는 가장 작은 분해다. $\nu=\mu_1-\mu_2$ 인 측도 $\mu_1,\mu_2$ 가 있으면 모든 $E$ 에서 $\nu^+(E)\le\mu_1(E)$ 이고 $\nu^-(E)\le\mu_2(E)$ 다. $\nu^+(E)=\mu_1(E\cap P)-\mu_2(E\cap P)\le\mu_1(E)$ 이기 때문이다.

## 전변동과 Jordan 분해

전변동은 양변동과 음변동의 합이다.

$$
\lvert\nu\rvert=\nu^+ +\nu^-
$$

분할 $E=(E\cap P)\cup(E\cap N)$ 에서 절댓값 합이 $\nu^+(E)+\nu^-(E)$ 이므로 전변동이 이 값 이상이다. 임의의 분할에서는 $\lvert\nu(E_i)\rvert\le\nu^+(E_i)+\nu^-(E_i)$ 를 더하면 이 값 이하다. 전변동은 측도이고, $\nu$ 의 영집합은 $\lvert\nu\rvert$ 의 값이 $0$ 인 집합과 같다.

## 밀도로 정의된 부호 측도

$\mu$ 가 측도이고 $f$ 가 $\mu$ 에 대해 적분가능한 실함수이면 $\nu(E)=\int_E f\thinspace d\mu$ 는 유한 부호 측도다. $P=\lbrace f\ge 0\rbrace$ 와 $N=\lbrace f\lt 0\rbrace$ 이 Hahn 분해이므로

$$
\nu^\pm(E)=\int_E f^\pm\thinspace d\mu,\qquad \lvert\nu\rvert(E)=\int_E\lvert f\rvert\thinspace d\mu
$$

이다. 여기서 $f^+=\max(f,0)$, $f^-=\max(-f,0)$ 이다. 직관 절의 예는 $\mu$ 가 Lebesgue 측도이고 $f(x)=x$ 인 경우다.

## 유한 부호 측도의 공간

$(X,\mathcal M)$ 위의 유한 부호 측도 전체는 집합마다 값을 더하고 상수배하는 연산으로 실벡터 공간이 된다. 전변동 노름 $\Vert\nu\Vert=\lvert\nu\rvert(X)$ 는 이 공간의 노름이고, 이 노름으로 공간은 완비이므로 [Banach 공간](banach-spaces.md)이다. 밀도 $f\mapsto\nu$ 는 $L^1(\mu)$ 에서 이 공간으로 가는 등거리 사상이다.

# 활용

- [Radon–Nikodym 정리](radon-nikodym.md)는 Jordan 분해로 부호 측도에 확장된다. 유한 부호 측도 $\nu$ 에서 $\lvert\nu\rvert\ll\mu$ 이면 $\nu^+$ 와 $\nu^-$ 에 각각 정리를 적용해 $\nu(E)=\int_E f\thinspace d\mu$ 인 적분가능한 $f$ 를 얻는다.
- [전변동거리](total-variation-distance.md)는 두 확률측도의 차 $\mu-\lambda$ 의 전변동 노름의 절반이다. 차가 가장 큰 사건 $A^\ast$ 는 $\mu-\lambda$ 의 Hahn 분해의 양집합이다.
- [유계변동 함수](bounded-variation.md)와 대응한다. $[a,b]$ 위의 오른쪽 연속인 유계변동 함수 $g$ 는 $\nu((a,x\rbrack)=g(x)-g(a)$ 인 유한 부호 Borel 측도를 정하고, 그 Jordan 분해가 $g$ 를 두 증가함수의 차로 쓰는 분해에 대응한다. 이 측도로 적분한 것이 [Riemann–Stieltjes 적분](riemann-stieltjes-integral.md)의 일반화다.
- [Riesz–Markov–Kakutani 표현 정리](riesz-markov-kakutani.md)는 콤팩트 Hausdorff 공간 $K$ 위의 연속함수 공간 $C(K)$ 의 쌍대공간이 $K$ 위의 유한 부호 정칙 Borel 측도의 공간이고 쌍대 노름이 전변동 노름이라는 정리다.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [Lebesgue 적분](lebesgue-integral.md)

## 더 알아보기

- [Riesz–Markov–Kakutani 표현 정리](riesz-markov-kakutani.md)

#measure_theory #analysis #probability
