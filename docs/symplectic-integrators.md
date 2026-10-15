# 심플렉틱 적분기

# 개요

심플렉틱 적분기는 Hamilton 계의 흐름을 근사하는 이산 사상 가운데 심플렉틱 2형식을 정확히 보존하는 것이다. 가장 단순한 2차 방법이 leapfrog 이고, 심플렉틱 사상은 원래 Hamiltonian 을 $h$ 의 거듭제곱으로 수정한 함수의 흐름으로 적힌다. 그 결과 에너지 오차가 걸음 수에 비례해 쌓이지 않고 $O(h^2)$ 에서 진동한다. 명시적 Runge–Kutta 류 방법은 이 성질이 없어 긴 적분에서 에너지가 한 방향으로 벗어난다.

# 직관

조화진동자의 Hamiltonian 은 $H=\frac{1}{2}(p^2+q^2)$ 이고 운동방정식은 $\dot q=p$, $\dot p=-q$ 다. 해는 위상평면의 원 위를 도는 등속 회전이고 $H$ 가 보존된다. 태양계나 분자의 궤적처럼 이 계를 수십만 걸음 적분해야 하는 경우가 있다.

보폭 $h$ 의 명시적 Euler 법으로 한 걸음 가면 $q_{n+1}=q_n+hp_n$ 과 $p_{n+1}=p_n-hq_n$ 이다. 두 식을 제곱해 더하면

$$
q_{n+1}^2+p_{n+1}^2=(q_n+hp_n)^2+(p_n-hq_n)^2=(1+h^2)(q_n^2+p_n^2)
$$

이다. 에너지가 걸음마다 정확히 $1+h^2$ 배로 커지고 $N$ 걸음 뒤에는 $(1+h^2)^N$ 배다. 시간 $T=Nh$ 를 고정하고 $h$ 를 줄이면 걸음 수가 늘어 $(1+h^2)^{T/h}$ 가 되고, 이 값은 $e^{hT}$ 에 가까워 $h$ 를 반으로 줄여도 절반밖에 나아지지 않는다.

두 변수를 모두 옛 값으로 갱신한 것이 걸린 자리다. $p$ 를 갱신할 때 이미 구한 $q_{n+1}$ 을 쓴다.

$$
q_{n+1}=q_n+hp_n,\qquad p_{n+1}=p_n-hq_{n+1}
$$

이 사상의 행렬은 $\begin{pmatrix}1&h\cr-h&1-h^2\end{pmatrix}$ 이고 행렬식이 $1-h^2+h^2=1$ 이다. 위상평면의 면적이 정확히 보존된다. 에너지는 보존되지 않지만 대신 $\tilde H=\frac{1}{2}(p^2+q^2)+\frac{h}{2}qp$ 가 걸음마다 정확히 보존되고, 이 양이 $H$ 와 $O(h)$ 차이이므로 $H$ 는 그 값 주위에서 진동하며 벗어나지 않는다.

자유도가 하나일 때의 면적 보존이 여러 자유도에서는 Jacobi 행렬 $M$ 에 대한 조건 $M^\top JM=J$ 로 적힌다. 이 조건을 지키는 한 걸음 사상을 쓰면 긴 적분에서도 에너지 오차가 유계로 남는다.

# 정의

## 심플렉틱 사상

$2d$ 차원 위상공간의 좌표를 $z=(q,p)$ 로 두고

$$
J=\begin{pmatrix}0&I\cr-I&0\end{pmatrix}
$$

라 한다. 미분가능 사상 $\Phi$ 의 Jacobi 행렬 $M(z)=\partial\Phi/\partial z$ 가 모든 $z$ 에서 $M(z)^\top JM(z)=J$ 를 만족하면 $\Phi$ 를 **심플렉틱 사상**이라 한다. 이 조건은 [심플렉틱 다양체](symplectic-manifolds.md)의 2형식 $\omega=\sum_i dq_i\wedge dp_i$ 를 $\Phi$ 가 보존한다는 것과 같다.

보폭 $h$ 의 한 걸음 사상 $\Phi_h$ 가 모든 $h$ 와 모든 Hamiltonian 에 대해 심플렉틱이면 그 수치 방법을 **심플렉틱 적분기**라 한다.

## Leapfrog

Hamiltonian 이 $H(q,p)=\frac{1}{2}p^\top M^{-1}p+V(q)$ 로 분리되면 다음 세 걸음을 한 걸음으로 묶은 것이 **leapfrog** 이고 속도 Verlet 이라고도 한다.

$$
p_{n+1/2}=p_n-\frac{h}{2}\nabla V(q_n),\qquad q_{n+1}=q_n+hM^{-1}p_{n+1/2},\qquad p_{n+1}=p_{n+1/2}-\frac{h}{2}\nabla V(q_{n+1})
$$

```javascript
function leapfrog(q, p, gradV, Minv, h, steps) {
  let ph = p.map((pi, i) => pi - (h / 2) * gradV(q)[i])
  for (let n = 0; n < steps; n++) {
    q = q.map((qi, i) => qi + h * Minv(ph)[i])
    const g = gradV(q)
    // 마지막 걸음이 아니면 반 걸음 둘을 한 걸음으로 합친다
    ph = ph.map((pi, i) => pi - (n === steps - 1 ? h / 2 : h) * g[i])
  }
  return [q, ph]
}
```

# 성질

## 심플렉틱성과 합성

**정리.** 심플렉틱 사상의 합성은 심플렉틱이고, leapfrog 는 심플렉틱이다.

$M_1^\top JM_1=J$ 와 $M_2^\top JM_2=J$ 에서 $(M_2M_1)^\top J(M_2M_1)=M_1^\top JM_1=J$ 가 나온다. Leapfrog 의 $p$ 걸음은 $q$ 를 고정하고 $p$ 에 $q$ 의 함수를 더하므로 Jacobi 행렬이 $\begin{pmatrix}I&0\cr-\frac{h}{2}\nabla^2V(q)&I\end{pmatrix}$ 꼴이고, $\nabla^2V$ 가 대칭이므로 조건을 만족한다. $q$ 걸음도 $M^{-1}$ 이 대칭이어서 같다. ∎

심플렉틱 조건은 행렬식이 $1$ 이라는 것보다 강하다. $d\ge 2$ 에서는 부피를 보존하면서 심플렉틱이 아닌 선형사상이 있다.

## 시간 가역성과 2차 정확도

Leapfrog 의 세 걸음은 순서를 뒤집어도 같은 식이므로 $\Phi_{-h}=\Phi_h^{-1}$ 이 성립한다. 이렇게 대칭인 방법의 국소 오차 전개에는 $h$ 의 짝수 거듭제곱만 남고, $h^2$ 항이 최저 차수라 2차 정확도다.

## 수정 Hamiltonian

**정리.** $H$ 가 해석적이고 수치해가 콤팩트 영역에 머물면, 심플렉틱 적분기의 한 걸음 사상은

$$
\tilde H_h=H+h^2H_2+h^4H_4+\cdots
$$

의 흐름을 $h$ 에 대해 지수적으로 작은 오차로 근사한다. 그 결과 $\vert H(z_n)-H(z_0)\vert=O(h^2)$ 가 $nh\le e^{c/h}$ 인 범위에서 성립한다[^1].

직관 절의 조화진동자가 이 정리의 사례다. 거기서 심플렉틱 Euler 법은 $\tilde H=\frac{1}{2}(p^2+q^2)+\frac{h}{2}qp$ 를 걸음마다 정확히 보존하고, $\tilde H$ 의 등위선이 원을 조금 기울인 타원이므로 $H$ 의 값이 그 타원 위에서 진동한다. ∎

심플렉틱이 아닌 $r$ 차 방법에는 이 전개가 없고 에너지 오차가 $O(t\thinspace h^r)$ 로 시간에 비례해 커진다.

## 고차 방법

2차 대칭 방법 $\Phi_h$ 를 세 번 합성한

$$
\Psi_h=\Phi_{\gamma_1h}\circ\Phi_{\gamma_0h}\circ\Phi_{\gamma_1h},\qquad \gamma_1=\frac{1}{2-2^{1/3}},\quad\gamma_0=\frac{-2^{1/3}}{2-2^{1/3}}
$$

은 4차 심플렉틱 적분기다[^2]. $2\gamma_1+\gamma_0=1$ 이 한 걸음의 시간을 맞추고 $2\gamma_1^3+\gamma_0^3=0$ 이 $h^3$ 항을 지운다. 같은 합성을 되풀이해 임의의 짝수 차수를 얻는다. $\gamma_0$ 이 음수라 중간 걸음이 시간을 거슬러 가고, 그래서 차수를 올릴수록 계수의 절댓값이 커진다.

# 활용

- [Hamiltonian Monte Carlo](hamiltonian-monte-carlo.md)가 제안을 leapfrog 로 만든다. 에너지 오차가 걸음 수에 무관하게 유계여서 수락률이 궤적 길이와 거의 무관하고, 사상의 부피 보존이 수락확률에서 제안밀도의 비를 없앤다.
- [Hamilton 역학](hamiltonian-mechanics.md)의 수치해에서 행성 궤도의 장기 적분에 쓴다. 에너지가 벗어나지 않으므로 궤도의 반지름이 수백만 주기 뒤에도 유지된다.
- 분자 동역학의 표준 적분기가 leapfrog 다. 보존되는 것이 $\tilde H$ 이므로 온도와 압력의 추정값에 $O(h^2)$ 의 치우침이 남는다.
- [적분가능계](integrable-systems.md)의 수치 실험에서 작용변수의 보존을 확인하는 데 쓴다. 심플렉틱이 아닌 방법은 불변 원환면이 수치적으로 붕괴한다.

[^1]: Ernst Hairer, Christian Lubich, Gerhard Wanner, *Geometric Numerical Integration*, 2판, Springer (2006), 9장.

[^2]: Haruo Yoshida, "Construction of higher order symplectic integrators", Physics Letters A 150 (1990), 262–268.

# 연관 문서

## 선수지식

- [심플렉틱 다양체](symplectic-manifolds.md)
- [Hamilton 역학](hamiltonian-mechanics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #computation #probability
