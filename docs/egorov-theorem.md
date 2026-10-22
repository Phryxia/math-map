# Egorov 정리

# 개요

**Egorov 정리(Egorov's theorem)** 는 유한 측도 공간에서 거의 어디서나 점별 수렴하는 [가측함수](measurable-functions.md)열이, 측도가 얼마든지 작은 집합 하나를 빼면 나머지에서 [균등수렴](uniform-convergence.md)한다는 정리다. 점별 수렴은 점마다 수렴 속도가 달라도 되고 균등수렴은 한 속도로 수렴해야 하는데, 유한 측도에서는 속도가 느린 점들을 작은 집합에 모아 뺄 수 있다.

# 직관

$[0,1]$ 에서 $f_n(x)=x^n$ 은 $x\lt 1$ 이면 $0$ 으로, $x=1$ 이면 $1$ 로 수렴한다. 수렴은 균등하지 않다. $x$ 가 $1$ 에 가까울수록 $x^n$ 이 $\tfrac12$ 아래로 내려가는 데 필요한 $n$ 이 커지고, $[0,1)$ 위에서 $\sup_x x^n=1$ 이 모든 $n$ 에서 성립한다.

수렴이 느린 점은 $1$ 근처에 모여 있다. 길이 $\delta$ 인 구간 $(1-\delta,1\rbrack$ 을 빼면 남은 $[0,1-\delta]$ 에서 $\sup_x x^n=(1-\delta)^n$ 이고 이 값은 $n\to\infty$ 에서 $0$ 으로 간다. 그래서 길이가 $\delta$ 인 집합만 빼면 균등수렴한다. $\delta$ 는 얼마든지 작게 잡을 수 있다.

$\delta=0$ 으로는 안 된다. 한 점 $\lbrace 1\rbrace$ 처럼 길이 $0$ 인 집합을 빼도 $[0,1)$ 에서 $\sup_x x^n=1$ 이다. Egorov 정리는 이 예에서 본 것, 곧 길이 $0$ 이 아닌 작은 집합을 빼면 균등수렴한다는 것이 유한 측도 공간의 모든 거의 어디서나 수렴하는 함수열에서 성립한다는 정리다.

# 정의

## 거의 균등수렴

$(X,\mathcal M,\mu)$ 가 측도 공간이고 $f_n,f$ 가 실숫값 가측함수일 때, 임의의 $\varepsilon\gt 0$ 에 대해 $\mu(E)\lt\varepsilon$ 이고 $X\setminus E$ 위에서 $f_n$ 이 $f$ 로 균등수렴하는 가측집합 $E$ 가 존재하면 $f_n$ 이 $f$ 로 **거의 균등수렴(almost uniform convergence)** 한다고 한다.

거의 균등수렴은 영집합 밖에서의 균등수렴이 아니다. 직관 절의 $x^n$ 은 $[0,1]$ 에서 $0$ 으로 거의 균등수렴하지만 어떤 영집합을 빼도 균등수렴하지 않는다.

## 정리

$\mu(X)\lt\infty$ 이고 실숫값 가측함수열 $f_n$ 이 거의 어디서나 실숫값 가측함수 $f$ 로 수렴하면 $f_n$ 은 $f$ 로 거의 균등수렴한다.

# 성질

## 증명

자연수 $n,k$ 에 대해

$$
E_{n,k}=\bigcup_{m\ge n}\Bigl\lbrace x:\lvert f_m(x)-f(x)\rvert\ge\tfrac1k\Bigr\rbrace
$$

로 둔다. $k$ 를 고정하면 $E_{n,k}$ 는 $n$ 에 대해 감소하고, 모든 $n$ 에 대한 교집합은 $f_n(x)$ 가 $f(x)$ 로 수렴하지 않는 점의 집합에 포함되므로 측도가 $0$ 이다. $\mu(X)\lt\infty$ 이므로 측도의 위로부터의 연속성에 따라 $\mu(E_{n,k})\to 0$ 이다.

$k$ 마다 $\mu(E_{n_k,k})\lt\varepsilon/2^k$ 인 $n_k$ 를 고르고 $E=\bigcup_k E_{n_k,k}$ 로 두면 $\mu(E)\lt\varepsilon$ 이다. $x\notin E$ 이면 모든 $k$ 와 $m\ge n_k$ 에서 $\lvert f_m(x)-f(x)\rvert\lt\tfrac1k$ 이므로 $X\setminus E$ 위에서 균등수렴한다.

## 유한 측도 조건

$\mu(X)\lt\infty$ 는 뺄 수 없다. $\mathbb R$ 위의 Lebesgue 측도에서 $f_n=\mathbf 1\_{[n,n+1]}$ 은 모든 점에서 $0$ 으로 수렴한다. $\mu(E)\lt 1$ 인 집합 $E$ 를 빼면 남은 집합은 모든 구간 $[n,n+1]$ 과 만나므로 $\sup_{x\notin E}f_n(x)=1$ 이 모든 $n$ 에서 성립하고, 균등수렴하지 않는다.

## 거의 어디서나 수렴과의 관계

거의 균등수렴하면 측도가 유한하지 않아도 거의 어디서나 수렴한다. $\mu(E_j)\lt 1/j$ 이고 $X\setminus E_j$ 에서 균등수렴하는 $E_j$ 를 잡으면, 수렴하지 않는 점은 모두 $\bigcap_j E_j$ 에 들고 이 집합의 측도는 $0$ 이다. 따라서 유한 측도 공간에서 두 수렴은 동치다.

## 측도 수렴

거의 균등수렴하면 측도 수렴(convergence in measure)한다. 곧 모든 $\eta\gt 0$ 에서 $\mu(\lbrace\lvert f_n-f\rvert\ge\eta\rbrace)\to 0$ 이다. $\mu(E)\lt\varepsilon$ 인 $E$ 밖에서 $n$ 이 충분히 크면 $\lvert f_n-f\rvert\lt\eta$ 이므로 그 집합이 $E$ 에 포함된다. Egorov 정리와 합치면 유한 측도 공간에서 거의 어디서나 수렴은 측도 수렴을 함의한다.

# 활용

- Lusin 정리(Lusin's theorem)의 증명에 쓴다. $[a,b]$ 위의 가측함수 $f$ 에 거의 어디서나 수렴하는 연속함수열을 잡고 Egorov 정리를 적용하면, 측도가 작은 집합 밖에서 연속함수의 균등극한이 되어 $f$ 가 그 위에서 연속이다.
- 유계 수렴 정리(bounded convergence theorem)를 증명한다. 유한 측도 공간에서 $\lvert f_n\rvert\le M$ 이고 거의 어디서나 $f_n\to f$ 이면, $\int\lvert f_n-f\rvert\thinspace d\mu$ 를 $E$ 위의 적분과 $X\setminus E$ 위의 적분으로 나눈다. 앞의 것은 $2M\mu(E)$ 이하이고 뒤의 것은 균등수렴으로 $0$ 으로 간다. [지배 수렴 정리](dominated-convergence.md)의 특수한 경우다.
- [균등적분가능성](uniform-integrability.md)에서 Vitali 수렴정리(Vitali convergence theorem)의 한 증명이 같은 분할을 쓴다. 측도가 작은 집합 위의 적분은 균등적분가능성으로, 나머지는 Egorov 정리의 균등수렴으로 작게 만든다.
- 확률론에서 거의 확실한 수렴은 확률수렴을 함의한다. 확률측도의 전체 측도가 $1$ 이므로 위의 측도 수렴 절이 그대로 적용된다.

# 연관 문서

## 선수지식

- [가측함수](measurable-functions.md)
- [균등수렴](uniform-convergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #analysis #probability #theorem
