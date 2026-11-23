# Lieb 오목성 정리

# 개요

**Lieb 오목성 정리(Lieb's concavity theorem)** 는 양의 준정부호 행렬 두 개 $A,B$ 와 $0\le t\le 1$ 에 대해 $\mathrm{tr}(A^tB^{1-t})$ 가 두 행렬을 함께 움직여도 오목하다는 정리다. 두 동전의 앞면 확률을 비교하는 두 실험을 반반의 확률로 섞으면 두 동전은 구별하기 어려워진다. 양자 상태에서 같은 것을 보이려면 행렬의 곱 $A^tB^{1-t}$ 를 다뤄야 하는데, $A$ 와 $B$ 가 교환하지 않으면 수에서 쓰던 계산이 통하지 않는다.

이 정리는 교환하지 않는 행렬에서도 그 계산의 결론이 성립한다고 답하고, 그 결과로 [양자 상대 엔트로피](quantum-relative-entropy.md)가 두 상태를 함께 섞을 때 늘지 않는다는 것이 증명된다.

# 직관

동전 $\rho\_1$ 은 늘 앞면이 나오고 동전 $\sigma\_1$ 은 앞뒤가 반반이다. 동전 $\rho\_2$ 는 늘 뒷면이 나오고 $\sigma\_2$ 는 앞뒤가 반반이다. 두 쌍을 대각행렬로 쓰면 다음과 같다.

$$
\rho\_1=\begin{pmatrix}1&0\cr 0&0\end{pmatrix},\quad\rho\_2=\begin{pmatrix}0&0\cr 0&1\end{pmatrix},\quad\sigma\_1=\sigma\_2=\begin{pmatrix}1/2&0\cr 0&1/2\end{pmatrix}
$$

상대 엔트로피 $D(\rho\Vert\sigma)=\mathrm{tr}\thinspace\rho(\log\rho-\log\sigma)$ 는 두 쌍에서 모두 $\log 2$ 다. 첫째 쌍과 둘째 쌍을 반반으로 섞으면 $\rho$ 도 $\sigma$ 도 반반 동전이 되어 상대 엔트로피가 $0$ 이다. 섞은 쌍의 값 $0$ 이 두 값의 평균 $\log 2$ 이하다.

이 부등식을 일반적으로 보이려고 다음 함수를 쓴다.

$$
g(t)=\mathrm{tr}(\rho^t\sigma^{1-t})
$$

$g(1)=\mathrm{tr}\thinspace\rho=1$ 이고 $g'(1)=D(\rho\Vert\sigma)$ 다. 첫째 쌍에서는 $g(t)=2^{t-1}$ 이고 $g'(1)=\log 2$ 다. 그러므로 $D(\rho\Vert\sigma)$ 는 $t\to 1$ 에서 $(1-g(t))/(1-t)$ 의 극한이다.

대각행렬이면 $g(t)$ 는 대각성분 $a\_i,b\_i$ 마다 $a\_i^tb\_i^{1-t}$ 를 더한 것이다. 양수 $a,b$ 의 함수 $a^tb^{1-t}$ 는 두 변수를 함께 움직여도 오목하므로 $g(t)$ 도 오목하고, $(1-g(t))/(1-t)$ 와 그 극한 $D$ 는 볼록하다. 대각이 아닌 행렬에서는 $\rho^t\sigma^{1-t}$ 가 성분마다 갈라지지 않는다. Lieb 오목성 정리는 이 경우에도 $g(t)$ 가 오목하다고 보장한다.

# 정의

$n\times n$ 양의 준정부호 행렬 전체를 $\mathcal P\_n$ 으로 쓴다. $\mathcal P\_n\times\mathcal P\_n$ 위의 실숫값 함수 $\Phi$ 가 모든 $(A\_1,B\_1),(A\_2,B\_2)$ 와 $0\le\lambda\le 1$ 에 대해 다음을 만족하면 **결합 오목(jointly concave)** 이라 한다.

$$
\Phi\bigl(\lambda A\_1+(1-\lambda)A\_2,\thinspace\lambda B\_1+(1-\lambda)B\_2\bigr)\ge\lambda\Phi(A\_1,B\_1)+(1-\lambda)\Phi(A\_2,B\_2)
$$

부등호가 반대이면 **결합 볼록(jointly convex)** 이라 한다. 직관 절에서 $D$ 를 첫째 쌍과 둘째 쌍의 반반 섞음에 적용한 부등식이 결합 볼록의 한 경우다.

# 성질

## 정리

**정리(Lieb, 1973).** 행렬 $K$ 와 $p,q\ge 0$, $p+q\le 1$ 에 대해 다음 함수는 $\mathcal P\_n\times\mathcal P\_n$ 에서 결합 오목이다[^1].

$$
(A,B)\mapsto\mathrm{tr}\bigl(K^{\ast}A^pKB^q\bigr)
$$

$K=I$, $p=t$, $q=1-t$ 이면 직관 절의 $g(t)$ 다.

## 증명의 요지

Ando 의 증명은 [텐서곱](tensor-products.md)으로 두 행렬을 교환하게 만든다[^2]. 행렬을 열벡터로 펼치는 사상 $\mathrm{vec}$ 에 대해 다음이 성립한다.

$$
\mathrm{tr}\bigl(K^{\ast}A^pKB^q\bigr)=\mathrm{vec}(K)^{\ast}\bigl((B^{\mathsf T})^q\otimes A^p\bigr)\mathrm{vec}(K)
$$

그러므로 $(A,B)\mapsto(B^{\mathsf T})^q\otimes A^p$ 가 Löwner 순서로 결합 오목이면 된다. $L=I\otimes A$ 와 $R=B^{\mathsf T}\otimes I$ 는 교환하는 양의 준정부호 행렬이고, 이 행렬은 $R^qL^p$ 이다.

$p+q=1$ 이면 $R$ 이 가역일 때 $R^{1-p}L^p=R^{1/2}(R^{-1/2}LR^{-1/2})^pR^{1/2}$ 이다. 이것은 [연산자 오목](operator-convex-functions.md) 함수 $x^p$ 의 원근(perspective)이고, 연산자 오목 함수의 원근은 결합 오목이다[^3]. $L$, $R$ 이 $A$, $B$ 의 일차식이므로 결합 오목성이 $(A,B)$ 로 옮겨진다. $p+q\lt 1$ 인 경우는 $B^q=(B^{q/(1-p)})^{1-p}$ 로 쓰고 $x^{q/(1-p)}$ 의 연산자 오목성을 더해 같은 방법으로 보인다.

## 상대 엔트로피의 결합 볼록성

밀도 행렬 쌍 $(\rho,\sigma)$ 에 대해 $D(\rho\Vert\sigma)$ 는 결합 볼록이다[^1]. 정리에서 $g(t)$ 가 결합 오목이므로 $(1-g(t))/(1-t)$ 는 $0\lt t\lt 1$ 마다 결합 볼록이고, 직관 절에 따라 $t\to 1$ 의 극한이 $D(\rho\Vert\sigma)$ 다. 결합 볼록 함수의 극한은 결합 볼록이다.

## 부분 대각합에 대한 단조성

$d$ 차원 계 $B$ 위의 유니터리 $U\_1,\dots,U\_{d^2}$ 를 잘 고르면 모든 $\rho$ 에 대해 다음이 성립한다.

$$
\frac1{d^2}\sum\_jU\_j\rho U\_j^{\ast}=\mathrm{tr}\_B\rho\otimes\frac Id
$$

여기서 $U\_j$ 는 $I\otimes U\_j$ 를 줄여 쓴 것이다. $D$ 는 유니터리로 두 상태를 함께 돌려도 변하지 않고 결합 볼록이므로 $D(\mathrm{tr}\_B\rho\Vert\mathrm{tr}\_B\sigma)\le D(\rho\Vert\sigma)$ 가 나온다. 이것이 양자 상대 엔트로피 문서의 Lindblad–Uhlmann 단조성의 부분 대각합 판본이다.

# 활용

- 강한 부가성. Lieb 와 Ruskai 는 이 정리로 von Neumann 엔트로피의 강한 부가성(strong subadditivity)을 증명했다[^4]. 양자 상대 엔트로피 문서는 그 증명을 부분 대각합에 대한 단조성에서 끌어낸다.
- Wigner–Yanase–Dyson 추측. $A=B=\rho$ 로 둔 $\rho\mapsto\mathrm{tr}(K^{\ast}\rho^tK\rho^{1-t})$ 의 오목성이 Wigner–Yanase–Dyson 왜곡 정보(skew information)의 볼록성 추측이었고, Lieb 는 이 정리로 그것을 증명했다[^1].
- [행렬 Bernstein 부등식](matrix-bernstein-inequality.md). Tropp 은 Lieb 의 다른 오목성 정리 $A\mapsto\mathrm{tr}\exp(H+\log A)$ 의 오목성으로 독립인 무작위 행렬의 합에 대한 꼬리 확률 부등식을 유도했다[^5].

[^1]: E. H. Lieb, "Convex trace functions and the Wigner–Yanase–Dyson conjecture", *Advances in Mathematics* 11 (1973), 267–288.
[^2]: T. Ando, "Concavity of certain maps on positive definite matrices and applications to Hadamard products", *Linear Algebra and its Applications* 26 (1979), 203–241.
[^3]: E. G. Effros, "A matrix convexity approach to some celebrated quantum inequalities", *Proceedings of the National Academy of Sciences* 106 (2009), 1006–1008.
[^4]: E. H. Lieb, M. B. Ruskai, "Proof of the strong subadditivity of quantum-mechanical entropy", *Journal of Mathematical Physics* 14 (1973), 1938–1941.
[^5]: J. A. Tropp, "User-friendly tail bounds for sums of random matrices", *Foundations of Computational Mathematics* 12 (2012), 389–434.

# 연관 문서

## 선수지식

- [연산자 볼록 함수](operator-convex-functions.md)

## 더 알아보기

- [행렬 Bernstein 부등식](matrix-bernstein-inequality.md)

#analysis #linear_algebra #information_theory
