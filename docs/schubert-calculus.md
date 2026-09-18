# Schubert 계산과 Grassmann 다양체

# 개요

3 차원 사영공간에서 일반 위치에 있는 직선 네 개와 모두 만나는 직선은 $2$ 개다. Schubert 는 19 세기 말에 이런 문제를 대량으로 풀었다. 그의 보존 원리는 직선들을 특수한 위치로 옮겨도 답이 변하지 않는다고 가정하고 퇴화한 배치에서 세는 방법이었다. 답은 대부분 맞았지만 근거가 엄밀하지 않았고, Hilbert 가 그 정당화를 15 번 문제로 걸었다.

현대적 답은 문제를 코호몰로지 계산으로 바꾼다. $\mathbb C^n$ 의 $k$ 차원 부분공간이 이루는 Grassmann 다양체 $\mathrm{Gr}(k,n)$ 에서 주어진 직선과 만난다는 조건이 부분다양체를 정의하고, 조건 여러 개를 동시에 만족하는 개수가 코호몰로지류의 곱이 된다.

$$
\text{기하 조건의 교차}\ \longleftrightarrow\ \text{코호몰로지류의 곱}
$$

[Borel–Weil–Bott](borel-weil-bott.md)의 Bruhat 분해가 계산의 기반이다. $\mathrm{Gr}(k,n)$ 이 세포로 분해되고 세포가 전부 짝수 차원이므로 코호몰로지가 세포 하나에 기저 하나씩으로 읽힌다. 그 기저가 **Schubert 류**이고 곱셈 구조가 [Schur 다항식](schur-polynomials.md)의 곱셈 구조와 같다. 열거기하의 수가 대칭함수의 계수로 계산된다.

# 직관

## 조건의 여차원

$\mathbb P^3$ 의 직선은 $\mathbb C^4$ 의 2 차원 부분공간이므로 $\mathrm{Gr}(2,4)$ 의 점이다. 이 공간은 4 차원이다.

주어진 직선 $L$ 에 대해 "$L$ 과 만나는 직선들" 의 집합은 $\mathrm{Gr}(2,4)$ 안에서 여차원 $1$ 의 부분다양체다. 조건 하나가 자유도 하나를 줄인다. 조건 네 개를 걸면 $4-4=0$ 차원, 곧 유한 개의 점이 남는다. 그 개수가 답이다.

각 조건의 코호몰로지류를 곱해 개수를 센다. 네 조건이 모두 같은 류 $\sigma_1$ 을 주므로 계산은

$$
\sigma_1^4\in H^8(\mathrm{Gr}(2,4))
$$

이고, 최고 차수 코호몰로지가 1 차원이므로 결과가 정수 배수로 나온다. 그 정수가 $2$ 다.

## 세포 분해와 Young 도형

$\mathrm{Gr}(k,n)$ 을 기준 깃발 $F_1\subset F_2\subset\cdots\subset F_n$ 에 대해 자른다. 부분공간 $V$ 가 각 $F_i$ 와 얼마나 만나는지를 재면 $V$ 의 "위치" 가 정해지고, 같은 위치의 $V$ 들이 세포 하나를 이룬다. 세포는 $k\times(n-k)$ 상자 안에 들어가는 Young 도형 $\lambda$ 로 색인되고, 여차원이 $|\lambda|$ 다.

세포가 전부 짝수 실차원이라 경계사상이 $0$ 이고, 따라서

$$
H^\ast(\mathrm{Gr}(k,n),\mathbb Z)=\bigoplus_{\lambda\subseteq k\times(n-k)}\mathbb Z\thinspace\sigma_\lambda
$$

이다. 기저의 개수는 상자 안 Young 도형의 개수 $\binom{n}{k}$ 다.

$\sigma_\lambda$ 를 $\lambda$ 의 Schur 다항식으로 보내는 사상이 환 준동형이고, 상자를 벗어나는 항을 $0$ 으로 보내면 두 곱셈이 일치한다. 열거기하의 구조상수가 Littlewood–Richardson 계수다.

## Pieri 규칙

$\sigma_1$ 을 곱하는 것은 간단하다.

$$
\sigma_1\cdot\sigma_\lambda=\sum_{\mu}\sigma_\mu
$$

합은 $\lambda$ 에 상자 하나를 더해 얻는 모든 유효한 도형 $\mu$ 에 대한 것이다. 상자를 더한 뒤에도 Young 도형이어야 하고, $k\times(n-k)$ 상자를 벗어나면 버린다.

이 규칙으로 $\sigma_1^N$ 이 계산된다. $N=k(n-k)$ 이면 최고 차수에 도달해 답이 수 하나가 되고, 그 수는 상자를 하나씩 채워 가는 경로의 수, 곧 $k\times(n-k)$ 직사각형의 표준 Young 배열 개수다.

# 정의

## Grassmann 다양체와 Schubert 세포

$\mathrm{Gr}(k,n)=\lbrace V\le\mathbb C^n:\dim V=k\rbrace$ 는 차원 $k(n-k)$ 의 매끄러운 사영다양체다. 기준 깃발 $F_\bullet$ 을 고정하고 $\lambda=(\lambda_1\ge\cdots\ge\lambda_k)$ 와 $\lambda_1\le n-k$ 에 대해

$$
\Omega_\lambda=\lbrace V:\dim(V\cap F_{n-k+i-\lambda_i})\ge i\ \ (1\le i\le k)\rbrace
$$

를 **Schubert 다양체**라 한다. 열린 부분이 세포 $\cong\mathbb C^{k(n-k)-|\lambda|}$ 이고 여차원이 $|\lambda|$ 다. 기본류를 $\sigma_\lambda\in H^{2|\lambda|}(\mathrm{Gr}(k,n))$ 로 쓴다.

## 곱셈 구조

$$
\sigma_\lambda\cdot\sigma_\mu=\sum_{\nu\subseteq k\times(n-k)}c^{\nu}\_{\lambda\mu}\thinspace\sigma_\nu
$$

$c^\nu_{\lambda\mu}$ 는 Littlewood–Richardson 계수이고 $|\nu|=|\lambda|+|\mu|$ 인 항만 남는다. 두 특수한 경우를 쓴다.

- **Pieri**: $\sigma_p\cdot\sigma_\lambda=\sum\sigma_\mu$ 이고, 합은 $\lambda\subseteq\mu$ 이며 $|\mu|=|\lambda|+p$ 이고 $\mu/\lambda$ 가 각 열에 많아야 한 상자인(수평 띠) $\mu$ 들.
- **Giambelli**: 임의의 $\sigma_\lambda$ 가 특수류 $\sigma_p$ 들의 행렬식으로 쓰인다. $\sigma_\lambda=\det(\sigma_{\lambda_i+j-i})\_{1\le i,j\le k}$ 이다.

두 규칙에서 환 $H^\ast(\mathrm{Gr}(k,n))$ 이 $\sigma_1,\dots,\sigma_{n-k}$ 로 생성됨이 나온다.

## Poincaré 다항식

세포가 여차원 $|\lambda|$ 이므로

$$
\sum_i\dim H^{2i}(\mathrm{Gr}(k,n))\thinspace q^{i}=\sum_{\lambda\subseteq k\times(n-k)}q^{|\lambda|}=\binom{n}{k}\_q
$$

우변은 $q$ 이항계수다. $q=1$ 을 넣으면 $\binom{n}{k}$ 로 기저의 개수가 나온다.

## 쌍대성과 적분

여차원이 상보적인 두 류의 곱이 최고류의 배수이고, 그 계수가 교차수다. $\lambda^\vee$ 를 $\lambda$ 의 상자 여집합을 180 도 돌린 도형이라 하면

$$
\int_{\mathrm{Gr}(k,n)}\sigma_\lambda\cdot\sigma_\mu=\delta_{\mu,\lambda^\vee}
$$

Schubert 기저는 교차 쌍에 대해 자기 쌍대 기저를 갖는다. 열거 문제의 답이 비음 정수로 나오는 것이 이 구조에서 온다.

# 성질

## 계수의 비음성

Littlewood–Richardson 계수는 비음 정수다. 조합적으로는 격자 낱말 조건을 만족하는 반표준 배열의 개수이고 기하적으로는 실제 교차점의 개수다. 이 계수가 $0$ 인지 묻는 조합 질문이 기하 질문이 된다.

Hermite 행렬 세 개의 고윳값이 언제 $A+B=C$ 를 만족할 수 있는지 묻는 Horn 문제가 $c^\nu_{\lambda\mu}\gt 0$ 인 조건으로 환원되고, Knutson–Tao 의 saturation 정리가 그 조건을 선형 부등식으로 기술한다.

## 실수체 위의 해

$\mathbb C$ 위에서 답이 $N$ 이어도 $\mathbb R$ 위의 실해가 $N$ 개라는 보장은 없다. Grassmann 다양체의 Schubert 문제에서는 적절히 배치하면 모든 해가 실수인 경우가 존재한다. Sottile 의 실수성 추측을 Mukhin–Tarasov–Varchenko 가 Gaudin 모형의 스펙트럼 이론으로 증명했다.

## 양자 코호몰로지로의 변형

$\mathrm{Gr}(k,n)$ 의 코호몰로지환을 유리곡선 세기로 변형한 것이 양자 코호몰로지환이고 구조상수가 Gromov–Witten 불변량이다. 그 환은 Bertram 의 양자 Pieri 규칙으로 기술되고 아핀 Lie 대수의 융합 규칙과 일치한다.

# 활용

## 4 직선 문제

$\mathrm{Gr}(2,4)$ 의 $2$ 가 Schubert 의 답이고 상자를 채우는 경우의 수로 나온다. $\mathrm{Gr}(2,5)$ 의 $5$ , $\mathrm{Gr}(2,6)$ 의 $14$ , $\mathrm{Gr}(3,6)$ 의 $42$ 는 Catalan 수다. 두 줄짜리 직사각형의 표준 배열이 Catalan 수를 세기 때문이다.

$\sigma_1^{k(n-k)}$ 은 일반 위치의 여차원 $1$ 조건을 차원만큼 걸었을 때의 해의 개수이고, 그것이 상자를 한 칸씩 채우는 순서의 개수와 같다. Hilbert 의 15 번 문제는 이 대응을 교차이론으로 세우는 작업이었다.

## 쓰이는 자리

- **열거기하**: 이차곡면에 놓인 직선, 주어진 곡선과 만나는 평면 같은 고전 문제가 이 틀에서 계산된다.
- **표현론과의 사전**: 구조상수가 $\mathrm{GL}\_n$ 텐서곱 분해의 Littlewood–Richardson 계수와 같다. 한쪽 계산이 다른 쪽 답을 준다.
- **행렬 스펙트럼**: Horn 문제와 saturation 정리를 통해 Hermite 행렬 합의 고윳값 문제로 이어진다.
- **양자 코호몰로지와 등각장론**: 양자 변형의 구조상수가 $\widehat{\mathfrak{sl}}\_n$ 준위 $k$ 의 융합 규칙과 일치한다.

[^1]: W. Fulton, *Young Tableaux*, Cambridge, 1997. 9 장이 Schubert 계산과 Littlewood–Richardson 규칙의 표준 서술이다.
[^2]: A. Knutson, T. Tao, *The honeycomb model of GL_n(C) tensor products I*, JAMS 12 (1999). saturation 정리.

# 연관 문서

## 선수지식

- [Borel–Weil–Bott 정리와 깃발다양체](borel-weil-bott.md)
- [Schur 다항식과 대칭함수](schur-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #combinatorics #differential_geometry #computation
