# Lovász 세타 함수

# 개요

**Lovász 세타 함수(Lovász theta function)** 는 [그래프](graphs.md) $G$ 마다 반정부호 계획으로 다항시간에 계산되는 수 $\vartheta(G)$ 이고, $\alpha(G)\le\vartheta(G)\le\chi(\bar G)$ 를 만족한다. 정점 다섯 개짜리 순환 $C_5$ 에서 서로 이웃하지 않는 정점은 많아야 둘이지만, $C_5$ 를 자기 자신과 곱한 그래프에서는 다섯 개를 고를 수 있어 한 자리마다 평균 $\sqrt5$ 개라는 값이 나온다. 이 값이 곱을 더 반복해도 커지지 않는지는 독립집합을 전부 찾아서는 확인할 수 없다. Lovász 세타 함수는 그 위의 상계를 볼록 최적화 하나로 주어, $C_5$ 에서 값이 정확히 $\sqrt5$ 임을 보인다.

# 직관

그래프 $G$ 에서 서로 이웃하지 않는 정점들의 모임을 독립집합(independent set)이라 하고, 그 최대 크기를 $\alpha(G)$ 라 쓴다. $\alpha(G)$ 를 구하는 문제와 [그래프 색칠](graph-coloring.md)의 채색수 $\chi(G)$ 를 구하는 문제는 둘 다 NP(nondeterministic polynomial time)-난해이므로, 두 값 대신 다항시간에 계산되는 상계를 찾는다.

각 정점 $i$ 에 단위벡터 $u_i$ 를 배정해 인접하지 않은 두 정점의 벡터가 서로 직교하게 하고, 단위벡터 $c$ 를 하나 고정한다. 독립집합 $S$ 의 정점들은 서로 인접하지 않으므로 그 벡터들이 직교하고, 직교하는 단위벡터 $k$ 개에 대해 $\sum\langle c,u_i\rangle^2\le1$ 이다. 각 $\langle c,u_i\rangle^2$ 가 $1/t$ 이상이면 $k\le t$ 이므로 그 $t$ 의 최솟값이 $\alpha(G)$ 의 상계이고, 이 최솟값이 $\vartheta(G)$ 다. 정점을 고르거나 말거나 하는 0–1 결정이 정점에 벡터를 놓는 문제가 되어 실행가능 영역이 볼록해지고 최적화가 다항시간에 끝난다.

$\bar G$ 를 $k$ 개의 색으로 칠하는 것은 $G$ 를 $k$ 개의 클릭으로 덮는 것이다. 각 클릭에 벡터 하나씩을 배정하면 위 완화의 실행가능해가 되고 그 값이 $k$ 이므로 $\vartheta(G)\le\chi(\bar G)$ 다. 그래서 $\alpha(G)\le\vartheta(G)\le\chi(\bar G)$ 이고, 가운데 값은 [반정부호 계획법](semidefinite-programming.md)으로 계산된다.

# 정의

## 직교 표현

$G=(V,E)$ 의 **직교 표현(orthonormal representation)** 은 각 정점에 배정된 단위벡터 $u_i\in\mathbb R^d$ 의 모임으로, 서로 다른 $i,j$ 에 대해 $ij\notin E$ 이면 $\langle u_i,u_j\rangle=0$ 인 것이다. 인접하지 않은 정점이 직교한다는 규약을 쓴다. 정점 다섯 개의 순환 $C_5$ 에서는 $\mathbb R^3$ 의 단위벡터 다섯 개를 축 $c$ 둘레에 같은 각으로 펴고, 이웃하지 않는 두 벡터가 직교할 때까지 축과의 각을 벌리면 직교 표현이 된다.

## 세타 함수

$$
\vartheta(G)=\min_{\lbrace u_i\rbrace,\thinspace c}\thinspace\max_{i\in V}\frac1{\langle c,u_i\rangle^2}
$$

$\lbrace u_i\rbrace$ 는 $G$ 의 직교 표현이고 $c$ 는 단위벡터다. 모든 정점이 $c$ 와 되도록 가까운 방향을 갖도록 표현을 고르는 문제이고, 이 최솟값이 $G$ 의 Lovász 세타 함수다. 위의 $C_5$ 표현에서는 각 벡터에 대해 $\langle c,u_i\rangle^2=1/\sqrt5$ 이므로 $\vartheta(C_5)\le\sqrt5$ 다.

## 반정부호 계획 형식

$$
\vartheta(G)=\max\thinspace \lbrace\thinspace\mathrm{tr}(JX)\thinspace :\thinspace X\succeq0,\thinspace \mathrm{tr}(X)=1,\thinspace X_{ij}=0\quad \forall ij\in E\thinspace\rbrace
$$

$J$ 는 모든 성분이 1 인 [행렬](matrices.md)이다. $X$ 를 랭크 1 인 $xx^{\mathsf T}$ 로 제한하면 독립집합 문제 자체가 되고, 랭크 제약을 푼 것이 이 완화다. 완전그래프 $K_n$ 에서는 비대각 성분이 모두 $0$ 이라 $\mathrm{tr}(JX)=\mathrm{tr}(X)=1$ 이고 $\vartheta(K_n)=1$ 이다. 간선이 없는 그래프에서는 $X=J/n$ 이 $\mathrm{tr}(JX)=n$ 을 준다.

쌍대는 [고윳값](eigenvalues.md) 문제다.

$$
\vartheta(G)=\min\thinspace \lbrace\thinspace\lambda_{\max}(A)\thinspace :\thinspace A=A^{\mathsf T},\thinspace A_{ij}=1\thinspace \text{if}\thinspace i=j\thinspace \text{or}\thinspace ij\notin E\thinspace\rbrace
$$

간선에 해당하는 성분만 자유롭게 고르고 나머지는 1 로 고정한 뒤 최대고윳값을 최소화한다. 강쌍대성이 성립해 두 값이 같다.

## Shannon 용량

**혼동 그래프(confusability graph)** 는 통신로의 입력 기호를 정점으로 하고, 같은 출력을 낼 수 있는 두 기호를 간선으로 이은 그래프다. 두 그래프의 **강곱(strong product)** $G\boxtimes H$ 는 정점이 쌍 $(g,h)$ 이고, 서로 다른 두 쌍은 각 좌표가 같거나 인접할 때 인접하는 그래프다. 서로 혼동되지 않는 길이 $k$ 의 부호어 최대 개수가 $\alpha(G^{\boxtimes k})$ 이고, **무오류 용량(zero-error capacity)** 은 다음이다.

$$
\Theta(G)=\lim_{k\to\infty}\alpha(G^{\boxtimes k})^{1/k}=\sup_k\alpha(G^{\boxtimes k})^{1/k}
$$

[Fekete 보조정리](fekete-lemma.md)로 극한이 존재하고 $\alpha(G)\le\Theta(G)$ 다. $C_5$ 의 정점을 $0,\dots,4$ 로 두면 $\alpha(C_5)=2$ 이고, 다섯 쌍 $(i,2i\bmod 5)$ 는 $C_5\boxtimes C_5$ 에서 서로 인접하지 않으므로 $\Theta(C_5)\ge\sqrt5$ 다. Shannon 이 1956 년에 무오류 용량을 정의하면서 $C_5$ 의 값을 결정하지 못했고[^1], Lovász 가 1979 년에 $\vartheta$ 로 그 값이 $\sqrt5$ 임을 증명했다[^2].

# 성질

## 샌드위치 정리

샌드위치 정리(sandwich theorem)는 다음이다.

$$
\alpha(G)\le\Theta(G)\le\vartheta(G)\le\chi(\bar G)
$$

가운데 항만 임의의 정밀도까지 다항시간에 계산된다. $\vartheta$ 는 [무리수](irrational-numbers.md)일 수 있고 $C_5$ 의 $\sqrt5$ 가 그 예이므로, 다항시간 계산에는 정밀도 단서가 붙는다.

## 완벽그래프에서의 등호

$G$ 가 완벽그래프(perfect graph)면 $\alpha(G)=\vartheta(G)=\chi(\bar G)$ 다. Grötschel, Lovász, Schrijver 는 이 등호와 [타원체법](ellipsoid-method.md)으로 완벽그래프의 독립집합 크기와 채색수를 다항시간에 계산했다. [강한 완벽그래프 정리](perfect-graphs.md)(2002)는 완벽그래프를 금지된 유도 부분그래프로 특징짓는다.

## 곱셈성과 보그래프

$$
\vartheta(G\boxtimes H)=\vartheta(G)\thinspace\vartheta(H),\qquad
\vartheta(G)\thinspace\vartheta(\bar G)\ge n
$$

곱셈성은 벡터 표현의 텐서곱이 다시 실행가능해가 되는 데서 나온다. $\alpha$ 는 곱셈적이지 않아 $\Theta$ 가 극한으로만 정의되지만, 곱셈성 덕분에 $\Theta(G)\le\vartheta(G)$ 는 극한을 계산하지 않고 나온다.

정점추이적 그래프에서 둘째 부등식은 등호다. $C_5$ 는 자기 보그래프와 동형이므로 $\vartheta(C_5)^2=5$ 이고 $\vartheta(C_5)=\sqrt5$ 다.

$\alpha(C_5\boxtimes C_5)=5$ 인 부호가 존재하므로 $\Theta(C_5)\ge\sqrt5$ 이고, 샌드위치 정리의 $\Theta(C_5)\le\sqrt5$ 와 합쳐 값이 확정된다.

$C_7$ 의 Shannon 용량은 결정되지 않았다[^2]. 상계는 $\vartheta(C_7)\approx3.3177$ 이고, 하계는 Polak–Schrijver 의 $367^{1/5}\approx 3.2578$ 이다[^3].

## 홀수 순환의 값

홀수 순환은 정점추이적이라 쌍대 형식의 자유 성분을 모두 같은 값으로 두어도 최적이다. $A=J+s\thinspace\mathrm{Adj}(C_n)$ 한 모수의 문제가 되고, 두 행렬이 모두 순환행렬이라 고윳값을 함께 읽는다.

$$
\lambda_0=n+2s,\qquad \lambda_k=2s\cos\frac{2\pi k}n\quad(k=1,\dots,n-1)
$$

$s\lt 0$ 이면 $\lambda_0$ 은 $s$ 에 대해 증가하고 $k\ne0$ 쪽의 최대 $-2s\cos(\pi/n)$ 은 감소하므로, 최대 고윳값은 둘이 같아지는 곳에서 가장 작다. $n+2s=-2s\cos(\pi/n)$ 을 풀면 $s=-n/\lbrace 2(1+\cos(\pi/n))\rbrace$ 이고

$$
\vartheta(C_n)=\frac{n\cos(\pi/n)}{1+\cos(\pi/n)}
$$

이 된다. $\vartheta(C_5)=\sqrt5$ 이고 $\vartheta(C_7)=3.3176\ldots$ 다.

샌드위치의 양 끝은 $\alpha(C_n)=\lfloor n/2\rfloor$ 와 $\chi(\overline{C_n})=\lceil n/2\rceil$ 로 1 만큼 벌어져 있고, 그 사이의 $\vartheta$ 는 무리수다. Niven 정리로 홀수 $n\ge5$ 에서 $\cos(\pi/n)$ 이 무리수이고, 유리계수 일차분수사상 $x\mapsto nx/(1+x)$ 가 무리수를 무리수로 보낸다.

$n$ 이 커지면 $\vartheta(C_n)/\alpha(C_n)\to1$ 이다. 무작위 그래프에서는 $\alpha(G)\approx2\log_2n$ 인데 $\vartheta(G)\approx\sqrt n$ 이라 간격이 다항식 규모로 벌어지므로, 완화의 품질은 그래프에 크게 의존한다.

## 근사 한계

정점 $n$ 개의 그래프에서 $\vartheta(G)/\alpha(G)$ 는 $n/2^{O(\sqrt{\log n})}$ 까지 커질 수 있다(Feige)[^4]. 무작위 그래프에서는 이 비가 $\sqrt n/\log n$ 규모다.

더 정밀한 완화는 반정부호 계획에 유효부등식을 더한 $\vartheta'$ 이나 $\vartheta^+$ , 또는 [Lasserre 계층](lasserre-hierarchy.md)이다. 계층을 $r$ 단계 올리면 $n^{O(r)}$ 크기의 반정부호 계획이 된다.

# 활용

## 무오류 부호화

[채널 부호화 정리](channel-coding.md)의 용량은 오류 확률을 0 으로 보내는 극한에서 정의되고, 무오류 용량은 오류를 정확히 0 으로 요구한다.

$\vartheta$ 는 Shannon 의 분수 클릭 덮개수 상계보다 언제나 좋거나 같고 $C_5$ 를 비롯한 여러 그래프에서 정확하다. 얽힘을 허용한 양자 무오류 용량의 상계로도 같은 양이 쓰인다.

## 완벽그래프와 조합 최적화

완벽그래프에서 독립집합, 클릭, 채색, 클릭 덮개가 모두 다항시간에 풀린다. 구간 그래프, 현 그래프, 이분그래프와 그 보그래프가 완벽그래프이므로 스케줄링과 자원 배정 문제의 상당수가 이 틀에 든다. 완벽그래프가 아닌 그래프에서는 $\vartheta$ 가 상계만 준다.

## 부호와 설계의 상계

$\vartheta$ 의 변형 $\vartheta'$ 을 연관 스킴(association scheme) 위의 부호에 적용하면 Delsarte 의 선형계획 상계가 나온다(Schrijver, 1979). [오류정정부호](error-correcting-codes.md) 크기의 고전적 상계들이 이 틀에서 통일되고, 반정부호 계획으로 강화하면 더 좋은 상계가 나온다.

구 채우기 밀도의 상계를 주는 Cohn–Elkies 선형계획법도 같은 구조다. 8 차원에서 이 상계가 정확히 달성됨을 Viazovska 가 2016 년에 증명했고, 24 차원은 같은 해 Cohn, Kumar, Miller, Radchenko, Viazovska 가 증명했다.

## 양자 문맥성

Cabello–Severini–Winter 틀에서는 그래프의 정점을 측정 결과로, 함께 일어날 수 없는 두 결과를 간선으로 둔다. 결과 확률의 합의 최댓값이 고전 모형에서 $\alpha(G)$, 양자 모형에서 $\vartheta(G)$, 배타성만 요구한 모형에서 분수 독립수 $\alpha^\ast(G)$ 다.

[^1]: C. E. Shannon, "The zero error capacity of a noisy channel", IRE Transactions on Information Theory 2 (1956), 8–19. 무오류 용량의 정의와 $C_5$ 가 미결로 남는다는 서술이 여기 있다.
[^2]: L. Lovász, "On the Shannon capacity of a graph", IEEE Transactions on Information Theory 25 (1979), 1–7. $\vartheta$ 의 정의, $\Theta(C_5)=\sqrt5$ 의 증명, 그리고 $C_7$ 을 비롯한 큰 홀수 순환의 값이 결정되지 않는다는 서술이 있다.
[^3]: S. Polak, A. Schrijver, "New lower bound on the Shannon capacity of C7 from circular graphs", Information Processing Letters 143 (2019), 37–40.
[^4]: U. Feige, "Randomized graph products, chromatic numbers, and the Lovász ϑ-function", Combinatorica 17 (1997), 79–90.

# 연관 문서

## 선수지식

- [반정부호 계획법](semidefinite-programming.md)
- [그래프 색칠](graph-coloring.md)

## 더 알아보기

- [완벽그래프와 강한 완벽그래프 정리](perfect-graphs.md)

#optimization #graph_theory #information_theory
