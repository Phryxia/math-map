# 반정부호 계수

# 개요

**반정부호 계수(positive semidefinite rank, psd rank)** 는 성분이 $0$ 이상인 행렬의 각 성분을 작은 양의 반정부호 행렬 두 개의 내적으로 쓸 때 필요한 행렬의 최소 크기다. $(i-j)^2$ 을 $(i,j)$ 성분으로 둔 표는 대각선이 모두 $0$ 이라, 음 아닌 수들의 곱의 합으로 쓰려면 항이 많이 든다. 같은 표를 $2\times 2$ 반정부호 행렬의 내적으로 쓰면 표의 크기와 상관없이 크기 $2$ 로 충분하고, 이 차이가 [반정부호 계획법](semidefinite-programming.md)으로 다면체를 적는 비용이 선형계획보다 작을 수 있는 이유다.

# 직관

[확장 복잡도](extension-complexity.md)는 슬랙 행렬을 음 아닌 행렬 두 개의 곱으로 쓸 때 필요한 가운데 차원, 곧 음 아닌 계수로 선형계획 확장의 크기를 잰다. $4\times 4$ 표 $M\_{ij}=(i-j)^2$ 를 본다.

$$
M=\begin{pmatrix}0&1&4&9\cr 1&0&1&4\cr 4&1&0&1\cr 9&4&1&0\end{pmatrix}
$$

음 아닌 수 $x\_{ik}$, $y\_{kj}$ 로 $M\_{ij}=\sum\_k x\_{ik}y\_{kj}$ 라 쓰면, 대각 성분이 $0$ 이므로 항 $k$ 마다 $x\_{ik}y\_{ki}=0$ 이다. 그래서 항 하나는 대각선 위의 칸을 덮지 못하고, 대각선 밖의 모든 칸을 양수로 채우려면 항이 여럿 있어야 한다.

수 대신 벡터를 쓴다. $u\_i=(i,-1)$, $v\_j=(1,j)$ 로 두면 $u\_i\cdot v\_j=i-j$ 이고, $M\_{ij}=(u\_i\cdot v\_j)^2$ 이다. 이 값은 $2\times 2$ 행렬 $A\_i=u\_iu\_i^{\mathsf T}$, $B\_j=v\_jv\_j^{\mathsf T}$ 의 성분끼리 곱해 더한 값과 같다. $A\_i$ 와 $B\_j$ 는 음 아닌 수 대신 쓰는 양의 반정부호 행렬이고, 표가 $n\times n$ 으로 커져도 크기는 $2$ 그대로다.

# 정의

## 반정부호 분해

$r\times r$ 실대칭 행렬 $A$, $B$ 의 내적을 $\langle A,B\rangle=\mathrm{tr}(AB)$ 로 쓰고, 양의 반정부호인 $r\times r$ 행렬 전체를 $\mathcal S^r\_+$ 로 쓴다. 성분이 $0$ 이상인 $m\times n$ 행렬 $M$ 의 **크기 $r$ 인 반정부호 분해(psd factorization)** 는 다음을 만족하는 $A\_1,\dots,A\_m,B\_1,\dots,B\_n\in\mathcal S^r\_+$ 다.

$$
M_{ij}=\langle A_i,B_j\rangle
$$

그런 분해가 존재하는 최소의 $r$ 을 $M$ 의 **반정부호 계수** $\mathrm{rank}\_{\mathrm{psd}}(M)$ 라 한다. 직관 절의 $A\_i=u\_iu\_i^{\mathsf T}$, $B\_j=v\_jv\_j^{\mathsf T}$ 는 크기 $2$ 인 반정부호 분해다.

# 성질

## 음 아닌 계수와의 비교

$\mathrm{rank}\_{\mathrm{psd}}(M)\le\mathrm{rank}\_+(M)$ 이다. 음 아닌 분해 $M\_{ij}=\sum\_k x\_{ik}y\_{kj}$ 에서 $A\_i$ 를 대각 성분이 $x\_{i1},\dots,x\_{ir}$ 인 대각행렬, $B\_j$ 를 대각 성분이 $y\_{1j},\dots,y\_{rj}$ 인 대각행렬로 두면 반정부호 분해가 된다.

## 계수와의 비교

$r\times r$ 실대칭 행렬 전체는 차원이 $r(r+1)/2$ 인 벡터공간이고, $M$ 은 그 공간의 벡터 $A\_i$ 와 $B\_j$ 의 내적을 늘어놓은 행렬이므로 다음이 성립한다.

$$
\mathrm{rank}(M)\le\frac{r(r+1)}{2},\qquad r=\mathrm{rank}\_{\mathrm{psd}}(M)
$$

직관 절의 $M$ 은 계수가 $3$ 이므로 $r=1$ 일 수 없고, 크기 $2$ 인 분해가 있으므로 $\mathrm{rank}\_{\mathrm{psd}}(M)=2$ 다. 같은 꼴의 $n\times n$ 표도 반정부호 계수가 $2$ 이지만, 음 아닌 계수는 $n$ 이 커지면 한없이 커진다[^1].

## 반정부호 확장

다면체 $P$ 가 $\mathcal S^r\_+$ 를 아핀 부분공간으로 자른 집합의 선형 사영이면 $P$ 에 크기 $r$ 인 반정부호 확장이 있다고 한다. 점이 아닌 다면체 $P$ 에 크기 $r$ 인 반정부호 확장이 있는 것과 $P$ 의 슬랙 행렬의 반정부호 계수가 $r$ 이하인 것은 동치다. J. Gouveia, P. A. Parrilo, R. R. Thomas 가 증명했다[^2].

이것은 확장 복잡도 문서의 Yannakakis 정리에서 음 아닌 수의 원뿔을 $\mathcal S^r\_+$ 로 바꾼 것이다. 증명도 같은 꼴로, 슬랙 행렬의 분해 $\langle A\_i,B\_j\rangle$ 에서 $B\_j$ 가 꼭짓점의 확장 좌표, $A\_i$ 가 부등식의 증명서가 된다.

## 지수 하한

J. R. Lee, P. Raghavendra, D. Steurer 는 $n$ 개 도시의 외판원 다면체, 절단 다면체, 상관 다면체의 반정부호 확장이 모두 크기 $2^{\Omega(n^{2/13})}$ 이상임을 증명했다[^3]. 이 다면체들 위의 최적화는 크기가 다항식인 반정부호 계획으로 정확히 적히지 않는다.

# 활용

- 반정부호 계획 정식화의 하한. 조합 최적화 문제의 다면체를 작은 반정부호 계획으로 적을 수 있는지가 슬랙 행렬의 반정부호 계수로 정해지고, 지수 하한 절의 결과가 그 답이다.
- [음 아닌 행렬 분해](nonnegative-matrix-factorization.md)의 일반화. 음 아닌 계수 대신 반정부호 계수를 쓰면 직관 절의 표처럼 같은 행렬이 훨씬 작은 분해를 갖는다.
- 양자 통신 복잡도. 음 아닌 계수의 로그가 [통신 복잡도](communication-complexity.md)에서 고전 프로토콜의 비용을 재듯, 반정부호 계수의 로그는 양자 상태를 보내는 프로토콜의 비용을 잰다[^4].

[^1]: H. Fawzi, J. Gouveia, P. A. Parrilo, R. Z. Robinson, R. R. Thomas, "Positive semidefinite rank", Mathematical Programming 153 (2015), 133–177.
[^2]: J. Gouveia, P. A. Parrilo, R. R. Thomas, "Lifts of convex sets and cone factorizations", Mathematics of Operations Research 38 (2013), 248–264.
[^3]: J. R. Lee, P. Raghavendra, D. Steurer, "Lower bounds on the size of semidefinite programming relaxations", Proceedings of the 47th Annual ACM Symposium on Theory of Computing (2015).
[^4]: S. Fiorini, S. Massar, S. Pokutta, H. R. Tiwary, R. de Wolf, "Exponential lower bounds for polytopes in combinatorial optimization", Journal of the ACM 62 (2015), article 17.

# 연관 문서

## 선수지식

- [확장 복잡도](extension-complexity.md)
- [반정부호 계획법](semidefinite-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #linear_algebra #complexity
