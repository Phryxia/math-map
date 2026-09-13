# 논문: Graph Sparsification by Effective Resistances

이 논문은 유효저항을 이용해 간선을 샘플링하여 그래프의 모든 전위 에너지를 동시에 근사한다.

## 정의

G를 n개 정점을 가진 연결 가중 무향 그래프, L_G를 그 Laplacian이라 하자. H는 같은 정점 집합을 갖고 원래 간선 중 일부에 새 가중치를 준 그래프이며 L_H는 그 Laplacian이다. 오차 허용량 ε는 0과 1 사이의 실수다.

H가 G의 spectral sparsifier라는 뜻은 모든 실수 열벡터 x에 대해 다음을 만족하는 것이다.

$$
(1-\varepsilon)x^{\mathsf T}L_Gx\le x^{\mathsf T}L_Hx\le(1+\varepsilon)x^{\mathsf T}L_Gx
$$

특정한 신호 하나가 아니라 모든 정점값 배정에 같은 부등식이 적용되어야 한다.

## 성질

간선 e의 전도도를 w_e, 양 끝 사이 유효저항을 R_e, e를 뽑을 확률을 p_e라 하자. 논문의 샘플링 분포는 다음과 같다.

$$
p_e=\frac{w_eR_e}{n-1}
$$

연결 그래프에서는 모든 간선의 w_eR_e 합이 n-1이므로 확률 합이 1이다. 양의 정수 q번 독립적으로 복원 추출하고, 뽑힌 간선의 가중치에 매번 다음 값을 더한다.

$$
\frac{w_e}{q p_e}
$$

간선별 기대 가중치는 원래 가중치와 같다. 논문의 핵심은 기대값 일치에 그치지 않고 모든 이차형식의 동시 근사를 보이는 것이다.

읽은 arXiv판 Theorem 1은 충분히 큰 n과 아래 오차 범위에서, 충분히 큰 절대상수 C를 사용한 다음 샘플 수로 성공 확률이 적어도 1/2임을 보인다.

$$
\frac1{\sqrt n}<\varepsilon<1,\qquad q=\left\lceil\frac{C n\log n}{\varepsilon^2}\right\rceil
$$

이는 이 판본의 정리 조건이다. 작은 오차 범위나 더 높은 성공 확률에 관한 변형을 동일한 문장에 섞지 않는다.

## 활용

간선이 많은 그래프에서 Laplacian 계산을 줄이면서 에너지와 cut 가중치를 근사한다. cut의 한쪽 정점 값은 1, 다른 쪽은 0으로 두면 에너지가 cut 가중치가 되므로 cut 근사는 spectral 근사에 포함된다.

최단 경로 길이를 같은 비율로 보존한다는 정리는 아니다. 무엇을 보존하도록 설계한 근사인지 구분해야 한다.

## 기타 참고 문헌

- [Spielman·Srivastava, Graph Sparsification by Effective Resistances](https://arxiv.org/abs/0803.0929): 2008년 공개, 2011년 SIAM Journal on Computing 게재.
- [논문 PDF](https://arxiv.org/pdf/0803.0929): Theorem 1과 Section 3의 행렬 집중 논증, Section 4의 유효저항 근사 계산.
- 기대 가중치의 확인은 q번의 선택 각각에서 선택 확률과 추가 가중치를 곱한 후 더하면 된다. 모든 x에 대한 보장은 별도의 행렬 분석을 요구한다.

# 연관 문서

## 선수지식

- [유효저항](effective-resistance.md)
- [유한 확률 공간](probability.md)

## 더 알아보기

아직 연결한 문서가 없다.
