# Wahba 문제

# 개요

**Wahba 문제(Wahba's problem)** 는 기준 좌표에서 아는 방향 몇 개와 몸체 좌표에서 잰 같은 방향들을 가장 잘 맞추는 회전을 찾는 문제다. 위성이 태양 방향과 지구 자기장 방향을 자기 몸체 좌표로 재면, 그 두 벡터를 지도에 적힌 두 방향으로 보내는 회전이 위성의 자세다. 측정에 오차가 있으면 두 방향을 정확히 맞추는 회전이 없으므로, 어긋남의 가중 제곱합이 가장 작은 회전을 고른다. 회전을 단위 사원수(unit quaternion)로 적으면 이 회전은 $4\times 4$ 대칭행렬의 가장 큰 고윳값에 속하는 고유벡터로 나온다.

# 직관

기준 좌표의 두 방향 $r_1=(1,0,0)$, $r_2=(0,1,0)$ 이 몸체 좌표에서 $b_1=(0,1,0)$, $b_2=(-1,0,0)$ 으로 측정되었다. $z$ 축을 중심으로 $90^\circ$ 돌리는 회전 $R$ 이 $Rr_1=b_1$, $Rr_2=b_2$ 를 만족한다.

측정값에 오차가 섞이면 $R$ 을 이 두 식으로 풀 수 없다. $R$ 의 성분 아홉 개가 직교 조건 여섯 개를 만족해야 하므로 연립일차방정식으로 풀 수도 없다. 그래서 어긋남의 제곱합 $\sum_i\vert b_i-Rr_i\vert^2$ 을 가장 작게 하는 회전을 찾는다. 단위 벡터에서는 $\vert b_i-Rr_i\vert^2=2-2\thinspace b_i^{\mathsf T}Rr_i$ 이므로 $\sum_i b_i^{\mathsf T}Rr_i$ 를 가장 크게 하면 된다.

회전을 단위 사원수 $q=(s,v_1,v_2,v_3)$ 로 적으면 $R$ 의 성분은 $q$ 의 이차식이다. 그러므로 $\sum_i b_i^{\mathsf T}Rr_i$ 는 $q$ 의 이차형식 $q^{\mathsf T}Kq$ 이고, $\vert q\vert=1$ 위에서 이것을 가장 크게 하는 문제는 [Rayleigh 몫](rayleigh-quotient.md)의 최대화다. 답은 $K$ 의 가장 큰 고윳값에 속하는 고유벡터다.

앞의 예에서 $K$ 는 $(1,4)$ 성분과 $(4,1)$ 성분만 $2$ 이고 나머지가 $0$ 인 행렬이다. 가장 큰 고윳값 $2$ 의 고유벡터는 $(1,0,0,1)/\sqrt 2$ 이고, 이 사원수가 $z$ 축 둘레의 $90^\circ$ 회전이다.

# 정의

## Wahba 문제

기준 좌표의 단위 벡터 $r_1,\dots,r_m$, 몸체 좌표에서 잰 단위 벡터 $b_1,\dots,b_m$, 양의 가중치 $w_1,\dots,w_m$ 이 주어졌을 때, 행렬식이 $1$ 인 $3\times 3$ [직교행렬](orthogonal-matrices.md) $R$ 가운데 다음을 가장 작게 하는 것을 찾는 문제를 **Wahba 문제** 라 한다[^1].

$$
L(R)=\frac12\sum_{i=1}^m w_i\vert b_i-Rr_i\vert^2
$$

직관 절의 예는 $m=2$, $w_1=w_2=1$ 이고 $z$ 축 둘레의 $90^\circ$ 회전에서 $L=0$ 이다.

## 자세 윤곽 행렬과 Davenport 행렬

$B=\sum_i w_ib_ir_i^{\mathsf T}$ 를 **자세 윤곽 행렬(attitude profile matrix)** 이라 한다. $z=\sum_i w_i\thinspace r_i\times b_i$, $S=B+B^{\mathsf T}$ 로 두고 다음 $4\times 4$ 대칭행렬을 **Davenport 행렬(Davenport matrix)** $K$ 라 한다.

$$
K=\begin{pmatrix}\mathrm{tr}B&z^{\mathsf T}\cr z&S-(\mathrm{tr}B)I\end{pmatrix}
$$

단위 사원수 $q=(s,v)$, $v=(v_1,v_2,v_3)$ 가 정하는 회전은 다음이다. $\lbrack v\times\rbrack$ 는 $u\mapsto v\times u$ 의 행렬이다.

$$
R(q)=(s^2-\vert v\vert^2)I+2vv^{\mathsf T}+2s\lbrack v\times\rbrack
$$

직관 절의 예에서 자세 윤곽 행렬은 다음이다.

$$
B=b_1r_1^{\mathsf T}+b_2r_2^{\mathsf T}=\begin{pmatrix}0&-1&0\cr 1&0&0\cr 0&0&0\end{pmatrix}
$$

$\mathrm{tr}B=0$, $S=0$, $z=r_1\times b_1+r_2\times b_2=(0,0,2)$ 이다. 그러므로 $K$ 는 $(1,4)$ 성분과 $(4,1)$ 성분만 $2$ 이고 나머지가 $0$ 이다.

# 성질

## Davenport q 방법

다음 정리로 해를 구하는 방법을 Davenport q 방법(Davenport's q-method)이라 한다.

정리. 모든 단위 사원수 $q$ 에 대해 $\sum_i w_i\thinspace b_i^{\mathsf T}R(q)r_i=q^{\mathsf T}Kq$ 이다. 그러므로 $K$ 의 가장 큰 고윳값 $\lambda_{\max}$ 에 속하는 단위 고유벡터 $q^\ast$ 에 대해 $R(q^\ast)$ 가 Wahba 문제의 해이고, 최소값은 다음이다[^2].

$$
L_{\min}=\sum_iw_i-\lambda_{\max}
$$

증명의 요지. 단위 벡터이므로 다음이 성립한다.

$$
L(R)=\sum_iw_i-\sum_iw_ib_i^{\mathsf T}Rr_i=\sum_iw_i-\mathrm{tr}(RB^{\mathsf T})
$$

$R(q)$ 의 식을 대각합에 넣고 $b^{\mathsf T}\lbrack v\times\rbrack r=v\cdot(r\times b)$ 를 쓰면 $q^{\mathsf T}Kq$ 가 나온다. 단위 사원수 전체가 회전 전체로 가므로 이 이차형식의 단위구 위 최대가 답이다.

$q$ 와 $-q$ 는 같은 회전을 준다. $\lambda_{\max}$ 가 단순 고윳값이면 해가 하나뿐이고, 측정 방향들이 한 직선 위에 있으면 그 직선 둘레의 회전만큼 해가 여럿이다.

## 직교 Procrustes 문제와의 관계

$L(R)$ 을 가장 작게 하는 것은 $\mathrm{tr}(RB^{\mathsf T})$ 를 가장 크게 하는 것이고, 이것은 가중치를 넣은 [직교 Procrustes 문제](orthogonal-procrustes.md)를 회전으로 한정한 Kabsch 문제다. $B=U\Sigma V^{\mathsf T}$ 를 [특이값 분해](singular-value-decomposition.md)라 하면 해는 다음이다.

$$
R=U\thinspace\mathrm{diag}(1,1,\det U\det V)\thinspace V^{\mathsf T}
$$

q 방법은 $3\times 3$ 특이값 분해 대신 $4\times 4$ 대칭 고윳값 문제를 풀고, 결과를 사원수로 바로 내놓는다.

# 활용

- 위성 자세 결정. 별 추적기, 태양 센서, 자기장 센서가 잰 방향을 성표와 자기장 모형의 방향에 맞추는 회전이 위성의 자세다. 탑재 계산기에서는 $\lambda_{\max}$ 가 $\sum_iw_i$ 에 가깝다는 것을 써서 $K$ 의 특성다항식에 [Newton 법](newton-method.md)을 돌리는 QUEST(QUaternion ESTimator) 알고리즘을 쓴다[^2].
- 관성 측정 장치의 정렬. 가속도계가 잰 중력 방향과 자력계가 잰 자북 방향 두 개로 장치의 초기 자세를 정한다.
- 점 구름 정합. 대응하는 점 쌍의 무게중심을 뺀 뒤 단위 벡터로 두지 않고 그대로 $B$ 에 넣으면 같은 $K$ 로 두 점 구름을 겹치는 회전이 나온다.

[^1]: Grace Wahba, "A least squares estimate of satellite attitude", *SIAM Review* 7 (1965), 409.
[^2]: F. Landis Markley, John L. Crassidis, *Fundamentals of Spacecraft Attitude Determination and Control*, Springer, 2014, 5 장.

# 연관 문서

## 선수지식

- [Rayleigh 몫](rayleigh-quotient.md)
- [직교 Procrustes 문제](orthogonal-procrustes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #optimization #algorithms
