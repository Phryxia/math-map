# Hurwitz 정리

# 개요

Hurwitz 정리는 정칙함수열이 국소 균등수렴할 때 영점의 개수가 극한으로 옮겨 간다는 정리다. 극한 $f$ 가 상수가 아니고 콤팩트 집합 $K$ 의 경계에서 영점을 갖지 않으면, 꼬리의 $f\_n$ 은 $K$ 안에서 $f$ 와 같은 개수의 영점을 갖는다. 증명은 영점의 개수를 $f'/f$ 의 적분으로 쓴 뒤 적분과 극한을 교환하는 것이다. 단사성의 보존과 영점 없음의 보존이 따름정리이고, 후자가 [Riemann 사상정리](conformal-mapping.md)의 극한 함수가 단사임을 보이는 단계다.

# 직관

$f\_n(z)=z^2-1/n$ 을 생각한다. 각 $f\_n$ 은 $\pm 1/\sqrt n$ 에 영점 둘을 갖고, $n\to\infty$ 에서 두 영점이 원점으로 모인다. 극한함수 $f(z)=z^2$ 은 원점에 2차 영점 하나를 갖는다. 영점의 자리는 움직였지만 중복도를 세면 개수가 둘로 유지된다.

개수를 세는 길은 [유수 정리](residue-theorem.md)가 준다. $f$ 가 원 $\vert z\vert=r$ 위에서 영점을 갖지 않으면 원 안의 영점 개수는 적분 하나다.

$$
N(f)=\frac{1}{2\pi i}\oint\_{\vert z\vert=r}\frac{f'(z)}{f(z)}\thinspace dz
$$

$f\_n\to f$ 가 균등수렴이면 $f\_n'\to f'$ 도 그렇고, 원 위에서 $\vert f\vert$ 가 양의 하한을 가지므로 $f\_n'/f\_n\to f'/f$ 가 원 위에서 균등수렴한다. 적분과 극한을 바꾸면 $N(f\_n)\to N(f)$ 다. 두 값은 정수이므로 큰 $n$ 에서 같다.

$r=1/2$ 에서 $\vert f(z)\vert=1/4$ 이고 $\vert f\_n(z)-f(z)\vert=1/n$ 이므로 $n\ge 5$ 부터 원 위의 $\vert f\_n\vert$ 이 $0$ 에서 떨어져 있고, 적분이 둘을 센다. 영점이 경계를 넘어 들어오거나 나가지 못하는 것이 이 하한의 몫이다.

# 정의

$\Omega\subseteq\mathbb C$ 를 열린 연결집합이라 하자. [정칙함수](holomorphic-functions.md)열 $(f\_n)$ 이 $\Omega$ 에서 $f$ 로 **국소 균등수렴**한다는 것은 $\Omega$ 의 모든 콤팩트 부분집합에서 $f\_n\to f$ 가 균등수렴하는 것이다. 이때 극한 $f$ 도 $\Omega$ 에서 정칙이고 $f\_n^{(k)}\to f^{(k)}$ 가 모든 $k$ 에서 국소 균등수렴한다.

$f$ 의 영점 $a$ 의 **중복도**는 $f(z)=(z-a)^m g(z)$ , $g(a)\neq 0$ 인 $m$ 이다. 열린집합 $U$ 안의 영점 개수 $N(f;U)$ 는 중복도를 더해 센다.

# 성질

## Hurwitz 정리

*정리.* $(f\_n)$ 이 $\Omega$ 에서 $f$ 로 국소 균등수렴하고 $f$ 가 항등적으로 $0$ 이 아니라 하자. $\overline D\subseteq\Omega$ 인 열린 원판 $D$ 에 대해 $f$ 가 $\partial D$ 에서 영점을 갖지 않으면, 어떤 $N$ 이 있어 $n\ge N$ 인 모든 $n$ 에서 다음이 성립한다[^1].

$$
N(f\_n;D)=N(f;D)
$$

*증명의 요지.* $\partial D$ 는 콤팩트이고 그 위에서 $\vert f\vert$ 가 연속이며 $0$ 이 되지 않으므로 $\delta=\min\_{\partial D}\vert f\vert\gt 0$ 이다. $f\_n\to f$ 가 $\partial D$ 에서 균등수렴하므로 큰 $n$ 에서 $\vert f\_n-f\vert\lt\delta/2$ 이고, 따라서 $\vert f\_n\vert\gt\delta/2$ 다. 이제 $f\_n'/f\_n$ 과 $f'/f$ 가 분모의 하한 덕분에 $\partial D$ 에서 균등수렴하므로 편각원리의 적분을 교환할 수 있다.

$$
N(f\_n;D)=\frac{1}{2\pi i}\oint\_{\partial D}\frac{f\_n'}{f\_n}\thinspace dz
\longrightarrow\frac{1}{2\pi i}\oint\_{\partial D}\frac{f'}{f}\thinspace dz=N(f;D)
$$

양쪽이 정수인 수열의 수렴이므로 큰 $n$ 에서 값이 같다. ∎

$f$ 가 $\partial D$ 에서 영점을 가지면 결론이 깨진다. $f\_n(z)=z-1-1/n$ 과 $D$ 를 단위 원판으로 두면 $f(z)=z-1$ 의 영점이 경계에 있고, $f\_n$ 의 영점은 모두 $D$ 밖이다.

## 영점 없음의 보존

*따름정리.* $(f\_n)$ 이 $f$ 로 국소 균등수렴하고 각 $f\_n$ 이 $\Omega$ 에서 영점을 갖지 않으면, $f$ 는 $\Omega$ 에서 영점을 갖지 않거나 항등적으로 $0$ 이다.

$f(a)=0$ 이고 $f\not\equiv 0$ 이면 영점이 고립되므로 $a$ 를 중심으로 하는 작은 원판의 경계에서 $f\neq 0$ 이고, 정리가 큰 $n$ 에서 $N(f\_n;D)=N(f;D)\ge 1$ 을 주어 가정에 어긋난다. 상수 $0$ 이 예외로 남는 것은 $f\_n(z)=1/n$ 이 보인다.

## 단사성의 보존

*따름정리.* $(f\_n)$ 이 $f$ 로 국소 균등수렴하고 각 $f\_n$ 이 $\Omega$ 에서 단사이면, $f$ 는 단사이거나 상수다.

*증명의 요지.* $f$ 가 상수가 아니고 $a\neq b$ 에서 $f(a)=f(b)=w$ 라 하자. $g\_n(z)=f\_n(z)-f\_n(a)$ 를 $a$ 를 뺀 영역 $\Omega\setminus\lbrace a\rbrace$ 에서 보면 각 $g\_n$ 은 $f\_n$ 의 단사성으로 영점을 갖지 않는다. $g\_n\to f-w$ 가 국소 균등수렴하고 $f-w$ 는 $b$ 에서 $0$ 이므로 앞의 따름정리에서 $f-w\equiv 0$ 이다. $f$ 가 상수가 아니라는 가정에 어긋난다. ∎

## Rouché 정리와의 관계

Rouché 정리는 $\partial D$ 에서 $\vert g\vert\lt\vert f\vert$ 이면 $f$ 와 $f+g$ 가 $D$ 에서 같은 개수의 영점을 갖는다고 말한다. 위 증명의 $\vert f\_n-f\vert\lt\delta/2\le\vert f\vert$ 는 $g=f\_n-f$ 로 둔 Rouché 의 가정이므로, Hurwitz 정리는 Rouché 정리를 수열에 적용한 것이다. 두 정리의 차이는 Rouché 가 함수 두 개의 비교이고 Hurwitz 가 수렴하는 무한열의 극한이라는 데 있다.

# 활용

- [Montel 정리](montel-theorem.md)로 뽑은 부분열의 극한이 단사임을 보이는 데 단사성의 보존을 쓴다. Riemann 사상정리의 증명은 단위 원판으로 가는 단사 정칙함수들의 족에서 미분계수를 최대로 하는 것을 극한으로 잡는데, 그 극한이 단사가 아니면 사상이 되지 못한다.
- 영점 없음의 보존은 정칙함수열의 극한이 영점을 갖지 않는 영역을 보장하므로, 역함수를 극한으로 옮기는 논증에서 쓰인다.
- 다항식열의 근의 수렴을 영점 개수의 보존으로 다룬다. 계수가 수렴하는 다항식열은 콤팩트 집합에서 균등수렴하므로, 극한 다항식의 근 근방마다 중복도만큼의 근이 모인다.
- [해석적 접속](analytic-continuation.md)으로 만든 함수열에서 영점의 개수를 세는 계산에 쓰인다. [Dirichlet 급수](dirichlet-series.md)의 부분합이 임계선 근방에서 갖는 영점 개수를 극한의 영점 개수와 비교하는 논증이 그 꼴이다.

[^1]: J. B. Conway, *Functions of One Complex Variable I*, 2nd ed., Chapter VII §2 — Hurwitz 정리, 영점 없음과 단사성의 보존, Rouché 정리와의 관계.

# 연관 문서

## 선수지식

- [유수 정리](residue-theorem.md)

## 더 알아보기

- [Montel 정리](montel-theorem.md)

#complex_analysis #analysis #theorem
